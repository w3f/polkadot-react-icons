import * as React from 'react'
import { SVGProps } from 'react'
const Countdown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M1.99408 26.125L18.9941 26.125" stroke="black" strokeWidth={2.5} />
		<path d="M1.99414 2.125L18.9941 2.125" stroke="black" strokeWidth={2.5} />
		<path
			d="M16.9171 8.365V2.125L3.99402 2.125L3.99402 8.365L10.4556 14.125L16.9171 8.365Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M3.9941 19.885L3.9941 26.125L16.9172 26.125L16.9172 19.885L10.4556 14.125L3.9941 19.885Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Countdown
