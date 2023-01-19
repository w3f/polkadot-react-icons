import * as React from 'react'
import { SVGProps } from 'react'
const Close = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M4.89252 4.23135L24.6915 24.0303" stroke="black" fill="none" />
		<path d="M24.6915 4.23135L4.89248 24.0303" stroke="black" fill="none" />
	</svg>
)
export default Close
