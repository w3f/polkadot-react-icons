import * as React from 'react'
import { SVGProps } from 'react'
const Countdown = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M6.99408 26.125L23.9941 26.125" />
			<path d="M6.99414 2.125L23.9941 2.125" />
			<path d="M21.9171 8.365V2.125L8.99402 2.125L8.99402 8.365L15.4556 14.125L21.9171 8.365Z" />
			<path d="M8.9941 19.885L8.9941 26.125L21.9172 26.125L21.9172 19.885L15.4556 14.125L8.9941 19.885Z" />
		</g>
	</svg>
)
export default Countdown
