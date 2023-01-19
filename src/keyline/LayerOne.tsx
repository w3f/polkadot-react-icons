import * as React from 'react'
import { SVGProps } from 'react'
const LayerOne = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M24 7.77035L13.1947 13.16L2 7.3897L12.8053 2L24 7.77035Z"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default LayerOne
