import * as React from 'react'
import { SVGProps } from 'react'
const NetworkIsConnected = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path d="M4 5.9518V14.2953C4 17.6947 5.7269 20.8612 8.58467 22.7021L14.0743 26.2383L19.7036 22.6104C22.5604 20.7693 24.2865 17.6034 24.2865 14.2048V5.9518L14.1386 2.23828L4 5.9518Z" />
			<path d="M14.0091 15.3685L13.9996 8.23825" strokeMiterlimit={10} />
			<path d="M14.0187 19.7748L14.0006 19.7566" strokeMiterlimit={10} />
		</g>
	</svg>
)
export default NetworkIsConnected
