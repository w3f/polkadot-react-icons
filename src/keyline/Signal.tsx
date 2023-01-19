import * as React from 'react'
import { SVGProps } from 'react'
const Signal = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M8.22223 13.5555L8.22223 26" stroke="black" />
		<path d="M2 19.7778L2 26" stroke="black" />
		<path d="M14.4444 8.22223L14.4444 26" stroke="black" />
		<path d="M20.6667 2L20.6667 26" stroke="black" />
	</svg>
)
export default Signal
