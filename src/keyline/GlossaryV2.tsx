import * as React from 'react'
import { SVGProps } from 'react'
const GlossaryV2 = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M2 19.8022V2L14 7.60066L26 2V19.8022L14 26L2 19.8022Z" />
			<path d="M14 25L14 8" />
		</g>
	</svg>
)
export default GlossaryV2
