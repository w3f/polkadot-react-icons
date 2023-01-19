import * as React from 'react'
import { SVGProps } from 'react'
const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M12.0086 3L12.0086 26" stroke="black" fill="none" />
		<path d="M2 12.1997L12.0086 2L22 12.1997" stroke="black" fill="none" />
	</svg>
)
export default ArrowUp
