import * as React from 'react'
import { SVGProps } from 'react'
const Bid = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M13.5053 19.0106C18.2027 19.0106 22.0106 15.2027 22.0106 10.5053C22.0106 5.80796 18.2027 2 13.5053 2C8.80796 2 5 5.80796 5 10.5053C5 15.2027 8.80796 19.0106 13.5053 19.0106Z" />
		<path d="M10.1033 10.4833L12.5053 13.3403L16.9075 7.67007" />
		<path d="M13.5054 26L13.5054 19.0107" strokeMiterlimit={10} />
	</svg>
)
export default Bid
