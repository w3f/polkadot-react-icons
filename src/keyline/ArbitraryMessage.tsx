import * as React from 'react'
import { SVGProps } from 'react'
const ArbitraryMessage = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M13.5083 9.30676H2V21.9626H6.13717V25.9716L11.4003 21.9626H20.2912V16.3554" />
		<path d="M19.6729 15.9608C23.095 15.9608 25.8691 13.1866 25.8691 9.76457C25.8691 6.3425 23.095 3.56836 19.6729 3.56836C16.2508 3.56836 13.4767 6.3425 13.4767 9.76457C13.4767 13.1866 16.2508 15.9608 19.6729 15.9608Z" />
		<path d="M17.0001 10.0568L18.7652 11.5684L22.0001 8.56836" />
		<path d="M7.01814 16.0181L7 16" strokeMiterlimit={10} />
		<path d="M11.0181 16.0181L11 16" strokeMiterlimit={10} />
		<path d="M15.0544 16.0181L15.0363 16" strokeMiterlimit={10} />
	</svg>
)
export default ArbitraryMessage
