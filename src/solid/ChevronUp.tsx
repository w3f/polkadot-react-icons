import * as React from 'react'
import { SVGProps } from 'react'
const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M1 14.1309L12.011 1.13086L23 14.1309"
			stroke="black"
			strokeWidth={2}
		/>
	</svg>
)
export default ChevronUp
