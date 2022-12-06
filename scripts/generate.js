import path from "path";
import fs from "fs";
import { appendFile, readFile, writeFile, readdir } from "node:fs/promises";
import { transform } from "@svgr/core";
import { pascalcase } from "pascalcase";

// const rootPath = path.join(__dirname, "..");
const encoding = "utf8";
const inputPath = "src/icons";
const outputPath = "src/components";

// if (!fs.existsSync(dir)) {
// 	fs.mkdirSync(dir);
// }

if (!fs.existsSync(outputPath)) {
	fs.mkdirSync(outputPath);
}

const readSvgFile = async (filename) => {
	try {
		return await readFile(`${inputPath}/${filename}`, { encoding });
	} catch (err) {
		console.error(err.message);
	}
};

const transformSvg = async (rawSvg, componentName) => {
	return await transform(
		rawSvg,
		{
			typescript: true,
		},
		{ componentName }
	);
};

const writeIndex = async (filename) => {
	const pathname = "src/index.ts";

	try {
		appendFile(
			pathname,
			`export { default as ${filename} } from './components/${filename}';`
		);
	} catch (err) {
		console.error(err.message);
	}
};

const writeIndex2 = async (imports, exports) => {
	const pathname = "src/index.ts";

	console.log({ imports, exports });

	try {
		await appendFile(
			pathname,
			`${imports} export default [${exports.toString()}]`
		);
	} catch (err) {
		console.error(err.message);
	}
};

const composeIndexImports = (currentImports, filename) => {
	return `${currentImports} import ${filename} from './components/${filename}';`;
};

const composeIndexExports = (currentExports, filename) => {
	return `${currentExports}, ${filename}`;
};

const composeReactComponent = (name, rawSvg) => `
import React, { type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const ${name} = (props: Props) => (${rawSvg})
`;

const writeReactComponent = async (filename, content) => {
	try {
		return await writeFile(`${outputPath}/${filename}.tsx`, content);
	} catch (err) {
		console.error(err.message);
	}
};
let indexImports = "";
let indexExports = [];

const generate = async () => {
	try {
		const icons = await readdir(inputPath);
		await icons.forEach(async (icon) => {
			if (path.extname(icon) === ".svg") {
				const componentName = pascalcase(path.basename(icon, ".svg"));

				const rawSvg = await readSvgFile(icon);

				const reactSvg = await transformSvg(rawSvg, componentName);

				indexImports = composeIndexImports(indexImports, componentName);
				indexExports.push(componentName);

				console.log(indexExports);

				writeReactComponent(componentName, reactSvg);
			}
		});
	} catch (err) {
		console.error(err);
	} finally {
	}
};

await generate();
