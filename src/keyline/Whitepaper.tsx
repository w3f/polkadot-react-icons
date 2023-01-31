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
		<path d="M5.00001 26.0005V2.00049H17L23.4615 8.46203V26.0005H5.00001Z" />
		<path d="M23 8.46201H17V2.50024" />
	</svg>
)
export default Whitepaper
