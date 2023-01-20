import * as React from 'react'
import { SVGProps } from 'react'
const ArrowBack = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 18 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M16 26L2 13.988L16 2"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default ArrowBack
