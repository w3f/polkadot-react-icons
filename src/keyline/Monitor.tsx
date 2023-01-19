import * as React from 'react'
import { SVGProps } from 'react'
const Monitor = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M2 15.5029H26V19.5H2V15.5029Z" stroke="black" />
		<path d="M2 1.5H26V15.5029H2V1.5Z" stroke="black" />
		<path d="M10 24H18" stroke="black" />
		<path d="M14 23.5L14 19.5" stroke="black" />
	</svg>
)
export default Monitor
