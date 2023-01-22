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
		<path d="M26 8.47375L2 8.47375M26 8.47375L20.4787 2.95249M26 8.47375L20.4787 14.0045" />
		<path d="M2 19.5213H25.9918M2 19.5213L7.52138 25.0521M2 19.5213L7.52138 14.0001" />
	</svg>
)
export default Transaction
