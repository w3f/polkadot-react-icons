import * as React from 'react'
import { SVGProps } from 'react'
const Collapse = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 17 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2.00927 24.9096L8.56616 17.0334L15.1362 24.9096"
			stroke="black"
			fill="none"
		/>
		<path
			d="M15.1357 2.13086L8.55247 10.0334L1.9824 2.13086"
			stroke="black"
			fill="none"
		/>
	</svg>
)
export default Collapse
