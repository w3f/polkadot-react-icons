import * as React from 'react'
import { SVGProps } from 'react'
const Deposit = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M18.706 26L2 26" stroke="black" />
		<path
			d="M10.4866 2L10.4866 20.5M16.0166 15.921L10.4866 21.4482L4.95184 15.9227"
			stroke="black"
		/>
	</svg>
)
export default Deposit
