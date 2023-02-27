import * as React from 'react'
import { SVGProps } from 'react'
const Withdraw = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M22.706 26L6 26" fill="none" data-nofill="true" />
		<path
			d="M14.4817 21.4482L14.4817 2.94818M8.95172 7.52722L14.4817 1.99997L20.0165 7.52548"
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default Withdraw
