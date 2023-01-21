import * as React from 'react'
import { SVGProps } from 'react'
const ArrowBack = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M21 26L7 13.988L21 2" fill="none" data-nofill="true" />
	</svg>
)
export default ArrowBack
