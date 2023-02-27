import * as React from 'react'
import { SVGProps } from 'react'
const Add = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M13.9883 2C20.6157 2 25.9883 7.37258 25.9883 14C25.9883 20.6274 20.6157 26 13.9883 26C7.36086 26 1.98828 20.6274 1.98828 14C1.98828 7.37258 7.36086 2 13.9883 2Z" />
		<path d="M8.7937 13.4606L19.1833 13.5167" />
		<path d="M14.0176 8.29507L13.9614 18.6846" />
	</svg>
)
export default Add
