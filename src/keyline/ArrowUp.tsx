import * as React from 'react'
import { SVGProps } from 'react'
const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M14.0086 3L14.0086 26" fill="none" data-nofill="true" />
		<path d="M4 12.1997L14.0086 2L24 12.1997" fill="none" data-nofill="true" />
	</svg>
)
export default ArrowUp
