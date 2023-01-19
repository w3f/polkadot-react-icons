import * as React from 'react'
import { SVGProps } from 'react'
const Signal = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M7.22217 12.5555L7.22217 25" stroke="black" strokeWidth={2} />
		<path d="M1 18.7778L1 25" stroke="black" strokeWidth={2} />
		<path d="M13.4443 7.22223L13.4443 25" stroke="black" strokeWidth={2} />
		<path d="M19.6667 1L19.6667 25" stroke="black" strokeWidth={2} />
	</svg>
)
export default Signal
