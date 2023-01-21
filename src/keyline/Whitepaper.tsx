import * as React from 'react'
import { SVGProps } from 'react'
const Whitepaper = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M2.00001 26V2H14L20.4615 8.46154V26H2.00001Z" />
		<path d="M19.5 8.46152H14.0001V3" />
	</svg>
)
export default Whitepaper
