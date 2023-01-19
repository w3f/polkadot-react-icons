import * as React from 'react'
import { SVGProps } from 'react'
const Stablecoin = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<circle cx={5} cy={5} r={3} stroke="black" />
		<circle cx={21} cy={5} r={3} stroke="black" />
		<path d="M13.5 11H13.5276L18.2631 19.25H8.73682L13.5 11Z" stroke="black" />
		<path d="M23 11L3 11" stroke="black" />
	</svg>
)
export default Stablecoin
