import * as React from 'react'
import { SVGProps } from 'react'
const Whitepaper = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M5.00001 26V2H17L23.4615 8.46154V26H5.00001Z" />
		<path d="M22.5 8.46152H17.0001V3" />
	</svg>
)
export default Whitepaper
