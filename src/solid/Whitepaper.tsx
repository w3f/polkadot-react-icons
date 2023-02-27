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
			d="M16 1H5C4.44772 1 4 1.44772 4 2V26C4 26.5523 4.44772 27 5 27H23.4615C24.0138 27 24.4615 26.5523 24.4615 26V9.46176H17C16.4477 9.46176 16 9.01405 16 8.46176V1ZM23.876 7.46176H18V1.58576L23.876 7.46176Z"
			stroke="none"
		/>
	</svg>
)
export default Whitepaper
