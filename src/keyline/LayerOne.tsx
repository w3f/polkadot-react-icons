import * as React from 'react'
import { SVGProps } from 'react'
const LayerOne = (props: SVGProps<SVGSVGElement>) => (
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
			d="M25 13.7704L14.1947 19.16L3 13.3897L13.8053 8L25 13.7704Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default LayerOne
