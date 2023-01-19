import * as React from 'react'
import { SVGProps } from 'react'
const ActionLeft = (props: SVGProps<SVGSVGElement>) => (
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
			d="M19 22L10 14.4925L19 7"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
	</svg>
)
export default ActionLeft
