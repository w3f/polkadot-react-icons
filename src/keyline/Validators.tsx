import * as React from 'react'
import { SVGProps } from 'react'
const Validators = (props: SVGProps<SVGSVGElement>) => (
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
			d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M8.03863 14.0733L13.0614 18.697L25.3774 2.42365"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
	</svg>
)
export default Validators
