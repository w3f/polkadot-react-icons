import * as React from 'react'
import { SVGProps } from 'react'
const Bridges = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M5.9344 5.1342L5.93432 1.39648L26 1.39651L25.9986 12.0195H22.2622"
			stroke="black"
		/>
		<path
			d="M22.0643 16.3474L22.0656 5.33096L2 5.33093L2.00008 16.3473L4.5082 16.3474C4.5082 16.3474 7.08762 12.6034 12.0684 12.6034C17.0492 12.6034 19.5574 16.3473 19.5574 16.3473L22.0643 16.3474Z"
			stroke="black"
		/>
	</svg>
)
export default Bridges
