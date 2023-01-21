import * as React from 'react'
import { SVGProps } from 'react'
const KeepAliveCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M26 2L26 11.5L26 20L2 20L2 11L2 2L26 2Z" />
		<path d="M2 11H8L10 8L14 16L19 5.5L22 11H26" />
	</svg>
)
export default KeepAliveCheck
