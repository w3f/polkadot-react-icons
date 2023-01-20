import * as React from 'react'
import { SVGProps } from 'react'
const NetworkIsConnected = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2 5.9518V14.2953C2 17.6947 3.7269 20.8612 6.58467 22.7021L12.0743 26.2383L17.7036 22.6104C20.5604 20.7693 22.2865 17.6034 22.2865 14.2048V5.9518L12.1386 2.23828L2 5.9518Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M12.0091 15.3685L11.9996 8.23825"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M12.0187 19.7748L12.0006 19.7566"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default NetworkIsConnected
