import * as React from 'react'
import { SVGProps } from 'react'
const Filter = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M2 4.0388H24" stroke="black" strokeWidth={2.5} />
		<path d="M18.5 6.39595L18.5 1.68166" stroke="black" strokeWidth={2.5} />
		<path d="M2 11.1102H24" stroke="black" strokeWidth={2.5} />
		<path
			d="M6.71429 13.4673L6.71429 8.75304"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M2 18.4435H24" stroke="black" strokeWidth={2.5} />
		<path d="M13 20.5388L13 15.8245" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default Filter
