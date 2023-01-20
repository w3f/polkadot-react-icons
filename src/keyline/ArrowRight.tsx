import * as React from 'react'
import { SVGProps } from 'react'
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M25 12.0086L2 12.0086"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M15.8003 2L26 12.0086L15.8003 22"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default ArrowRight
