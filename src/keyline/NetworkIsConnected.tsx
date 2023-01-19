import * as React from 'react'
import { SVGProps } from 'react'
const NetworkIsConnected = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2 5.9518V19.7488L12.0743 26.2383L22.2865 19.6569V5.9518L12.1386 2.23828L2 5.9518Z"
			stroke="black"
		/>
		<path
			d="M12.0091 15.3685L11.9996 8.23825"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M12.0187 19.7748L12.0006 19.7566"
			stroke="black"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default NetworkIsConnected
