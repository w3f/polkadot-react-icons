import * as React from 'react'
import { SVGProps } from 'react'
const Indeterminate = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M25.9941 1.67578H1.99414V25.6758H25.9941V1.67578Z"
			stroke="black"
		/>
		<path d="M8.85114 13.6997L19.2407 13.7558" stroke="black" />
	</svg>
)
export default Indeterminate
