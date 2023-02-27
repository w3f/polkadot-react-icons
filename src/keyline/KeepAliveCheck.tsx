import * as React from 'react'
import { SVGProps } from 'react'
const KeepAliveCheck = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M26 5L26 14.5L26 23L2 23L2 14L2 5L26 5Z" />
		<path d="M2 14H8L10 11L14 19L19 8.5L22 14H26" />
	</svg>
)
export default KeepAliveCheck
