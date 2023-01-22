import * as React from 'react'
import { SVGProps } from 'react'
const Email = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M26 4H2V24.219H26V4Z" />
		<path d="M3 5.31509L14 15.3151L25 5.31509" />
	</svg>
)
export default Email
