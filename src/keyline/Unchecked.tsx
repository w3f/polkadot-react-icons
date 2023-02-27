import * as React from 'react'
import { SVGProps } from 'react'
const Unchecked = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M26.9766 2.08008H2.97656V26.0801H26.9766V2.08008Z" />
		</g>
	</svg>
)
export default Unchecked
