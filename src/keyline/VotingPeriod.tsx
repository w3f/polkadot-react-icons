import * as React from 'react'
import { SVGProps } from 'react'
const VotingPeriod = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M15.2908 8.99999L6.64577 17.645L11.175 22.1742L14.6369 22.1742L21.551 15.2602L15.2908 8.99999Z" />
			<path d="M21.5273 22.1729L6 22.1729" strokeMiterlimit={10} />
		</g>
	</svg>
)
export default VotingPeriod
