import * as React from 'react'
import { SVGProps } from 'react'
const Overview = (props: SVGProps<SVGSVGElement>) => (
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
		<g>
			<path d="M11.5 26.1934H2V10.6934L14 2.19336L26 10.6934V26.1934H17V17.6934H11.5V26.1934Z" />
		</g>
	</svg>
)
export default Overview
