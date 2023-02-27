import * as React from 'react'
import { SVGProps } from 'react'
const Stablecoin = (props: SVGProps<SVGSVGElement>) => (
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
		<circle cx={6} cy={9} r={3} />
		<circle cx={22} cy={9} r={3} />
		<path d="M14.5 15H14.5276L19.2631 23.25H9.73682L14.5 15Z" />
		<path d="M24 15L4 15" />
	</svg>
)
export default Stablecoin
