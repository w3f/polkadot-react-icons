import * as React from 'react'
import { SVGProps } from 'react'
const BlockNumber = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M2 14.4276H4.57235" />
		<path d="M23.4277 14.4276H26" />
		<path d="M23.4277 5H4.57235V23.8553H23.4277V5Z" />
		<path d="M11.8745 10.114L11.8745 18.599" strokeMiterlimit={10} />
		<path d="M16.1651 10.114L16.1651 18.599" strokeMiterlimit={10} />
		<path d="M18.2623 12.2115L9.77731 12.2115" strokeMiterlimit={10} />
		<path d="M18.2623 16.5021L9.77731 16.5021" strokeMiterlimit={10} />
	</svg>
)
export default BlockNumber
