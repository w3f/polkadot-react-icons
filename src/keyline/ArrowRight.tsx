import * as React from 'react'
import { SVGProps } from 'react'
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M25 14.0086L2 14.0086" fill="none" data-nofill="true" />
		<path d="M15.8003 4L26 14.0086L15.8003 24" fill="none" data-nofill="true" />
	</svg>
)
export default ArrowRight
