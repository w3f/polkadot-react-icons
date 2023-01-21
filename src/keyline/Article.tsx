import * as React from 'react'
import { SVGProps } from 'react'
const Article = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path d="M5.19507 27.0057V1.5332H17.9313L24.7893 8.39118V27.0057H5.19507Z" />
			<path d="M24.5 8.85798H18V2" />
			<path
				d="M14.0125 5.45215H9.11389V10.3507H14.0125V5.45215Z"
				strokeMiterlimit={10}
			/>
			<path d="M9.11382 17.2087H20.8704" strokeMiterlimit={10} />
			<path d="M9.11382 23.0869H20.8704" strokeMiterlimit={10} />
		</g>
	</svg>
)
export default Article
