import * as React from 'react'
import { SVGProps } from 'react'
const Unchecked = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M25.9707 2.08008H1.9707V26.0801H25.9707V2.08008Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Unchecked
