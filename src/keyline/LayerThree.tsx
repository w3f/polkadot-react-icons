import * as React from 'react'
import { SVGProps } from 'react'
const LayerThree = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M5.73274 14.4662L2 16.3281L13.1947 22.0984L24 16.7087L20.3521 14.8284"
			strokeMiterlimit={10}
		/>
		<path
			d="M20.155 10.2577L24 12.2396L13.1947 17.6293L2 11.8589L5.81434 9.95634"
			strokeMiterlimit={10}
		/>
		<path
			d="M24 7.77035L13.1947 13.16L2 7.3897L12.8053 2L24 7.77035Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default LayerThree
