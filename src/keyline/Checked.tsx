import * as React from 'react'
import { SVGProps } from 'react'
const Checked = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M26 2H2V26H26V2Z" />
			<path d="M8.99963 14.3184L12.6078 17.6884L19.2205 11" />
		</g>
	</svg>
)
export default Checked
