import * as React from 'react'
import { SVGProps } from 'react'
const Email = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.75 2.54988V22.219C0.75 22.9094 1.30964 23.469 2 23.469H26C26.6904 23.469 27.25 22.9094 27.25 22.219V3.00505L14.8259 13.9384C14.3465 14.3602 13.6262 14.3529 13.1555 13.9214L0.75 2.54988ZM26.0279 0.750306C26.0186 0.750102 26.0093 0.75 26 0.75H2.48623L14.0171 11.3199L26.0279 0.750306Z"
		/>
	</svg>
)
export default Email
