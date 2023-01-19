import * as React from 'react'
import { SVGProps } from 'react'
const Download = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 20 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2 23.5V26L18.706 26V23.5"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<path
			d="M10.4865 2L10.4865 20.5M16.0165 15.921L10.4865 21.4482L4.95172 15.9227"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
	</svg>
)
export default Download
