import * as React from 'react'
import { SVGProps } from 'react'
const Signal = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M11.2222 13.5555L11.2222 26" />
		<path d="M5 19.7778L5 26" />
		<path d="M17.4444 8.22223L17.4444 26" />
		<path d="M23.6667 2L23.6667 26" />
	</svg>
)
export default Signal
