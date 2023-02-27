import * as React from 'react'
import { SVGProps } from 'react'
const Dropdown = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M3 8L14 19.9167L25 8.00001L3 8Z" />
	</svg>
)
export default Dropdown
