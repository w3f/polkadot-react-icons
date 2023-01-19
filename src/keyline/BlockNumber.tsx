import * as React from 'react'
import { SVGProps } from 'react'
const BlockNumber = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M2 11.4276H4.57235" stroke="black" />
		<path d="M23.4277 11.4276H26" stroke="black" />
		<path d="M23.4277 2H4.57235V20.8553H23.4277V2Z" stroke="black" />
		<path
			d="M11.8745 7.11401L11.8745 15.599"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M16.1651 7.11401L16.1651 15.599"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M18.2623 9.21149L9.77731 9.21149"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M18.2623 13.5021L9.77731 13.5021"
			stroke="black"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default BlockNumber
