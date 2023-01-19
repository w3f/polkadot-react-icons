import * as React from 'react'
import { SVGProps } from 'react'
const UseCases = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M26 2H6.87516V21.1248H26V2Z" stroke="black" strokeWidth={2.5} />
		<path
			d="M16.4376 7.04315L20.953 11.5586L16.4376 16.0816"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M20.0024 11.5624L1.99994 11.5624"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default UseCases
