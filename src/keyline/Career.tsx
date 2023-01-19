import * as React from 'react'
import { SVGProps } from 'react'
const Career = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M9.38129 6.45019V2H18.6192V6.5" stroke="black" strokeWidth={2.5} />
		<path
			d="M26 6.62796H2V23.2377H26V6.62796Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M3 13.3445L25 13.3445" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default Career
