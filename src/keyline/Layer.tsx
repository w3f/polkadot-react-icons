import * as React from 'react'
import { SVGProps } from 'react'
const Layer = (props: SVGProps<SVGSVGElement>) => (
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
			d="M17.0036 13.999L21.008 18.0059L13.0011 26L5 17.9989L8.99863 14.0002"
			strokeMiterlimit={10}
		/>
		<path
			d="M21.0032 9.99642L13.0012 17.9989L5.00208 9.9991L13.0015 1.99985L21.0032 9.99642Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Layer
