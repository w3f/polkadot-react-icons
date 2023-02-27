import * as React from 'react'
import { SVGProps } from 'react'
const Transaction = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			d="M2 8.47366L25 8.47366M20.4787 2.95239L26 8.47366L20.4787 14.0044"
			fill="none"
		/>
		<path
			d="M25.9918 19.5213H3M7.52138 25.0521L2 19.5213L7.52138 14.0001"
			fill="none"
		/>
	</svg>
)
export default Transaction
