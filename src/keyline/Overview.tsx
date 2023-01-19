import * as React from 'react'
import { SVGProps } from 'react'
const Overview = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M11.5 26H2V10.5L14 2L26 10.5V26H17V17.5H11.5V26Z" stroke="black" />
	</svg>
)
export default Overview
