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

const transformSvg = async (rawSvg, componentName) => {
	return await transform(
		rawSvg.replace('fill="black"', ''),
		{
			plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
			jsx: {
				babelConfig: {
					plugins: [
						[
							'@svgr/babel-plugin-remove-jsx-attribute',
							{
								elements: ['path', 'rect', 'circle', 'ellipse'],
								attributes: [
									'strokeWidth',
									'strokeColor',
									'strokeLinecap',
									'strokeLinejoin',
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
										name: 'stroke',
										value: 'currentColor',
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

				const reactSvg = await transformSvg(rawSvg, componentName)

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
