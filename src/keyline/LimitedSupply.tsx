import * as React from 'react'
import { SVGProps } from 'react'
const LimitedSupply = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M4.56793 24.4529H23.4045V7.51797H4.56793V24.4529Z" />
		<path d="M2 7.51174H26V3H2V7.51174Z" />
		<path d="M14.9603 19.876L19.351 19.8904L19.3655 15.5071" />
		<path d="M8.11823 12.1604L12.0457 15.7778L13.8051 14.0185L18.482 18.9733" />
	</svg>
)
export default LimitedSupply
