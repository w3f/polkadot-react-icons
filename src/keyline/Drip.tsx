import * as React from 'react'
import { SVGProps } from 'react'
const Drip = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M7 17.8836C7 23.4036 10.0031 26 14 26C17.9969 26 21 23.4036 21 17.8836C21 12.3636 14 3 14 3C14 3 7 12.3636 7 17.8836Z" />
	</svg>
)
export default Drip
