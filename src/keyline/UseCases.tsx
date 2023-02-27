import * as React from 'react'
import { SVGProps } from 'react'
const UseCases = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M26 4H6.87515V23.1248H26V4Z" />
		<path d="M16.4376 9.04315L20.953 13.5586L16.4376 18.0816" />
		<path d="M20.0024 13.5624L1.99994 13.5624" />
	</svg>
)
export default UseCases
