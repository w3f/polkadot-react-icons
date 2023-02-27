import * as React from 'react'
import { SVGProps } from 'react'
const Tools = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M11 7.00002H4M4 2L11 2V20.2857L7.5 26L4 20.2857L4 2Z" />
		<path d="M20.5001 7.99993L17 7.99993M20.4998 13.9999H17M20.5001 19.6434H17M17 2L24 2V26H17V2Z" />
	</svg>
)
export default Tools
