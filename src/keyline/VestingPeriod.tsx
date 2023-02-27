import * as React from 'react'
import { SVGProps } from 'react'
const VestingPeriod = (props: SVGProps<SVGSVGElement>) => (
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
		<g>
			<path d="M26 26H2V3.88452H26V26Z" strokeMiterlimit={10} />
			<path d="M9.42337 6.34171V2" strokeMiterlimit={10} />
			<path d="M18.5764 6.34177V2.00006" strokeMiterlimit={10} />
			<path d="M10.9154 13.364L10.9154 12.0846V12C10.9154 10.3431 12.2586 9 13.9154 9H14.0846C15.7415 9 17.0846 10.3431 17.0846 12V12.0846L17.0846 13.364" />
			<path d="M20 13.3658H8V22.0931H20V13.3658Z" />
		</g>
	</svg>
)
export default VestingPeriod
