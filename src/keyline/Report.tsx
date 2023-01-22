import * as React from 'react'
import { SVGProps } from 'react'
const Report = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M20.4999 5.99969H23.9994V26H7.99969V22.0003" />
		<path d="M19.9997 2V21.9994H4V2H19.9997Z" />
		<path d="M4.48828 16.6885L8.59276 12.5838L11.6647 15.1438L16.2727 10.5358" />
	</svg>
)
export default Report
