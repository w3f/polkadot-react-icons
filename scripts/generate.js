import path from 'path'
import fs from 'fs'
import { appendFile, readFile, writeFile, readdir } from 'node:fs/promises'
import { transform } from '@svgr/core'
import { pascalcase } from 'pascalcase'

const encoding = 'utf8'

const directories = {
	keyline: {
		input: 'src/icons/keyline',
		output: 'src/keyline',
	},
	solid: {
		input: 'src/icons/solid',
		output: 'src/solid',
	},
}

if (!fs.existsSync(directories.keyline.output)) {
	fs.mkdirSync(directories.keyline.output)
}

if (!fs.existsSync(directories.solid.output)) {
	fs.mkdirSync(directories.solid.output)
}

const readSvgFile = async (filename, dir) => {
	try {
		return await readFile(`${dir}/${filename}`, { encoding })
	} catch (err) {
		console.error(err.message)
	}
}

// perform some manipulations/cleanup on icons depending on icon type
const prepareSvg = (rawSvg, iconType) => {
	const preparedSvg =
		iconType === 'solid'
			? // adds a stroke="none" to any element that doesn't explicitly set it
			  // this allows us to customise an icon by setting a stroke on the svg
			  // which is then inherited to all children without a stroke attribute
			  rawSvg.replace(
					/<(path|circle|rect|ellipsis)( .*?)( *\/>|> *<\/\1>)/gis,
					(tag, g1, g2, g3) => {
						if (!g2.match(/\bstroke=["']/i)) {
							return '<' + g1 + g2 + ' stroke="none"' + g3
						} else {
							return tag
						}
					},
			  )
			: rawSvg

	return (
		preparedSvg
			// removes all <def> (part of the artboard)
			.replace(/(\<defs\>)(.*?)(\<\/defs\>)/gs, '')
			// remove all stroke attributes which are not explicitly set to "none"
			.replace(/(fill|stroke)="(black|white)\w*"/g, '')
	)
}

// transforms SVG strings into React components
const transformSvg = async (rawSvg, componentName) => {
	return await transform(
		rawSvg,
		{
			plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
			jsx: {
				babelConfig: {
					plugins: [
						[
							'@svgr/babel-plugin-remove-jsx-attribute',
							{
								elements: ['path', 'rect', 'circle', 'ellipse', 'g'],
								attributes: [
									'strokeLinecap',
									'strokeLinejoin',
									'clipPath',
									'strokeWidth',
								],
							},
						],
						[
							'@svgr/babel-plugin-add-jsx-attribute',
							{
								elements: ['svg'],
								attributes: [
									{
										name: 'width',
										value: '28',
									},
									{
										name: 'height',
										value: '28',
									},
									{
										name: 'strokeWidth',
										value: '2',
									},
									{
										name: 'strokeLinecap',
										value: 'round',
									},
									{
										name: 'strokeLinejoin',
										value: 'round',
									},
								],
							},
						],
					],
				},
			},
			typescript: true,
			prettier: true,
		},
		{ componentName },
	)
}

const writeIndex = async (imports, exports, outputPath) => {
	const pathname = `${outputPath}/index.ts`

	try {
		await appendFile(
			pathname,
			`${imports
				.toString()
				.replaceAll(',', ' ')} export default {${exports.toString()}}`,
		)
	} catch (err) {
		console.error(err.message)
	}
}

const composeIndexImports = filename => {
	return `import ${filename} from './${filename}.js';`
}

const writeReactComponent = async (filename, content, outputPath) => {
	try {
		return await writeFile(`${outputPath}/${filename}.tsx`, content)
	} catch (err) {
		console.error(err.message)
	}
}

const generate = async iconType => {
	let indexImports = []
	let indexExports = []
	let hasError = false

	try {
		const icons = await readdir(directories[iconType].input)

		console.log(`Generating components for ${iconType} icons`)

		for await (const icon of icons) {
			if (path.extname(icon) === '.svg') {
				const componentName = pascalcase(path.basename(icon, '.svg'))

				const rawSvg = await readSvgFile(icon, directories[iconType].input)

				const reactSvg = await transformSvg(
					prepareSvg(rawSvg, iconType),
					componentName,
				)

				indexImports.push(composeIndexImports(componentName))
				indexExports.push(componentName)

				writeReactComponent(
					componentName,
					reactSvg,
					directories[iconType].output,
				)
			}
		}

		writeIndex(indexImports, indexExports, directories[iconType].output)
	} catch (err) {
		console.error(`❌ Error while generating ${iconType} components`)
		console.error(err)

		hasError = true
	} finally {
		// this seems to be off by one if run in the try block
		if (!hasError) {
			const components = await readdir(directories[iconType].output)

			console.log(
				`✅ Done! Generated ${components.length} ${iconType} components`,
			)
		}
	}
}

await generate('keyline')
await generate('solid')
