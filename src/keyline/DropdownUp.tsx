import * as React from 'react'
import { SVGProps } from 'react'
const DropdownUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2 15L14.012 2L26 15"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default DropdownUp
