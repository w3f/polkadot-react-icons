import * as React from 'react'
import { SVGProps } from 'react'
const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M13.9914 25L13.9914 2" fill="none" data-nofill="true" />
		<path d="M24 15.8003L13.9914 26L4 15.8003" fill="none" data-nofill="true" />
	</svg>
)
export default ArrowDown
