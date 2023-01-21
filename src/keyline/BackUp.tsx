import * as React from 'react'
import { SVGProps } from 'react'
const BackUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z" />
			<path d="M13.9981 25.5L13.9981 10.5M10.3377 12.9485L14 9.28807L17.6654 12.9474" />
		</g>
	</svg>
)
export default BackUp
