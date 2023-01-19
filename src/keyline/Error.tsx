import * as React from 'react'
import { SVGProps } from 'react'
const Error = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M10.3076 17.6221L17.6938 10.3153"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M10.3489 10.2756L17.6558 17.6618"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Error
