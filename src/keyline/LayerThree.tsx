import * as React from 'react'
import { SVGProps } from 'react'
const LayerThree = (props: SVGProps<SVGSVGElement>) => (
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
			d="M6.73274 16.4662L3 18.3281L14.1947 24.0984L25 18.7087L21.3521 16.8284"
			strokeMiterlimit={10}
		/>
		<path
			d="M21.155 12.2577L25 14.2396L14.1947 19.6293L3 13.8589L6.81434 11.9563"
			strokeMiterlimit={10}
		/>
		<path
			d="M25 9.77035L14.1947 15.16L3 9.3897L13.8053 4L25 9.77035Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default LayerThree
