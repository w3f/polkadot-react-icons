import * as React from 'react'
import { SVGProps } from 'react'
const Menu = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M1.98242 8.96161H25.9824" stroke="black" strokeWidth={2.5} />
		<path d="M1.98242 16.2532H25.9824" stroke="black" strokeWidth={2.5} />
		<path d="M1.98242 1.66992H25.9824" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default Menu
