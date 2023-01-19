import * as React from 'react'
import { SVGProps } from 'react'
const Check = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M1 7.94592L8.76634 15L23 1" stroke="black" />
	</svg>
)
export default Check
