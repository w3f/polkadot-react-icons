import * as React from 'react'
import { SVGProps } from 'react'
const Stablecoin = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={26}
		height={21}
		viewBox="0 0 26 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<circle cx={5} cy={5} r={3} />
		<circle cx={21} cy={5} r={3} />
		<path d="M13.5 11H13.5276L18.2631 19.25H8.73682L13.5 11Z" />
		<path d="M23 11L3 11" />
	</svg>
)
export default Stablecoin
