import * as React from 'react'
import { SVGProps } from 'react'
const Whitepaper = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15 1H4C3.44772 1 3 1.44772 3 2V26C3 26.5523 3.44772 27 4 27H22.4615C23.0138 27 23.4615 26.5523 23.4615 26V9.46176H16C15.4477 9.46176 15 9.01405 15 8.46176V1ZM22.876 7.46176H17V1.58576L22.876 7.46176Z"
			stroke="none"
		/>
	</svg>
)
export default Whitepaper
