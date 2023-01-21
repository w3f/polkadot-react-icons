import * as React from 'react'
import { SVGProps } from 'react'
const Elections = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M25.8716 14.9436V26H2L2.02488 15.7534" />
		<path d="M17.0029 5.76299H22.1341L25.8725 14.8704V15.8763H2.00092V14.8695L5.77523 5.76299H10.8696" />
		<path d="M8.27478 10.5318H19.5977" />
		<path d="M17.0029 2H10.8696V10.5318H17.0029V2Z" />
	</svg>
)
export default Elections
