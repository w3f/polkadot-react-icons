import * as React from 'react'
import { SVGProps } from 'react'
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M3 13.9914L26 13.9914" fill="none" data-nofill="true" />
		<path d="M12.1997 24L2 13.9914L12.1997 4" fill="none" data-nofill="true" />
	</svg>
)
export default ArrowLeft
