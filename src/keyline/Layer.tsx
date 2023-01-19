import * as React from 'react'
import { SVGProps } from 'react'
const Layer = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 20 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M14.0036 13.999L18.008 18.0059L10.0011 26L2 17.9989L5.99863 14.0002"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M18.0032 9.99642L10.0012 17.9989L2.00208 9.9991L10.0015 1.99985L18.0032 9.99642Z"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Layer
