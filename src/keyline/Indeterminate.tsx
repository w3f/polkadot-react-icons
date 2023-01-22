import * as React from 'react'
import { SVGProps } from 'react'
const Indeterminate = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path d="M26.9941 2.67578H2.99414V26.6758H26.9941V2.67578Z" />
			<path d="M9.85114 14.6997L20.2407 14.7558" />
		</g>
	</svg>
)
export default Indeterminate
