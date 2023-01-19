import * as React from 'react'
import { SVGProps } from 'react'
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 25 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M23.9883 1.5625L12.9772 14.5625L1.98828 1.5625" stroke="black" />
	</svg>
)
export default ChevronDown
