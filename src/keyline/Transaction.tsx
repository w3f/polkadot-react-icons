import * as React from 'react'
import { SVGProps } from 'react'
const Transaction = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M26 7.47375L2 7.47375M26 7.47375L20.4787 1.95249M26 7.47375L20.4787 13.0045" />
		<path d="M2 18.5213H25.9918M2 18.5213L7.52138 24.0521M2 18.5213L7.52138 13.0001" />
	</svg>
)
export default Transaction
