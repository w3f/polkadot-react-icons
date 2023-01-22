import * as React from 'react'
import { SVGProps } from 'react'
const Monitor = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M2 16.5029H26V20.5H2V16.5029Z" />
		<path d="M2 2.5H26V16.5029H2V2.5Z" />
		<path d="M10 25H18" />
		<path d="M14 24.5L14 20.5" />
	</svg>
)
export default Monitor
