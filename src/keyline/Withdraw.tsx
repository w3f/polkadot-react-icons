import * as React from 'react'
import { SVGProps } from 'react'
const Withdraw = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 20 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M18.706 26L2 26" stroke="black" fill="none" />
		<path
			d="M10.4817 21.4482L10.4817 2.94818M4.95172 7.52722L10.4817 1.99997L16.0165 7.52548"
			stroke="black"
			fill="none"
		/>
	</svg>
)
export default Withdraw
