import * as React from 'react'
import { SVGProps } from 'react'
const SoftwareDevelopment = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M1.99997 26L26.2441 26L26.2441 2L1.99997 2L1.99997 26Z"
			stroke="black"
		/>
		<path d="M26.2371 8.57935H2.00026" stroke="black" />
		<path
			d="M9.32502 5.46778L9.30768 5.45044"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M5.50117 5.46778L5.48383 5.45044"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path d="M10.2498 19.2866L7.39581 16.9107L10.2498 14.53" stroke="black" />
		<path d="M18.2633 14.5205L21.1268 16.906L18.2633 19.2866" stroke="black" />
		<path d="M15.8593 12.1421L12.6537 21.674" stroke="black" />
	</svg>
)
export default SoftwareDevelopment
