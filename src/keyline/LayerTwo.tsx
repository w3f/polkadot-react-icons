import * as React from 'react'
import { SVGProps } from 'react'
const LayerTwo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 19"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M20.3211 10.3433L24 12.2396L13.1947 17.6293L2 11.8589L5.6688 10.0289"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M24 7.77035L13.1947 13.16L2 7.3897L12.8053 2L24 7.77035Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default LayerTwo
