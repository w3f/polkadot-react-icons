import * as React from 'react'
import { SVGProps } from 'react'
const Withdraw = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M18.706 26.0002L2 26.0002" stroke="black" strokeWidth={2.5} />
		<path
			d="M10.4816 21.4484L10.4816 2.94843M4.95166 7.52746L10.4816 2.00022L16.0164 7.52572"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Withdraw
