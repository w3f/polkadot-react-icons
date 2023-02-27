import * as React from 'react'
import { SVGProps } from 'react'
const Genesis = (props: SVGProps<SVGSVGElement>) => (
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
			d="M2 4C1.44772 4 1 4.44772 1 5V23C1 23.5523 1.44772 24 2 24H19C19.5523 24 20 23.5523 20 23V15H26C26.5523 15 27 14.5523 27 14C27 13.4477 26.5523 13 26 13H20V5C20 4.44772 19.5523 4 19 4H2ZM20 13V15H12C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13H20Z"
			stroke="none"
		/>
	</svg>
)
export default Genesis
