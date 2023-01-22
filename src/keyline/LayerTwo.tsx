import * as React from 'react'
import { SVGProps } from 'react'
const LayerTwo = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			d="M21.3211 14.3433L25 16.2396L14.1947 21.6293L3 15.8589L6.6688 14.0289"
			strokeMiterlimit={10}
		/>
		<path
			d="M25 11.7704L14.1947 17.16L3 11.3897L13.8053 6L25 11.7704Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default LayerTwo
