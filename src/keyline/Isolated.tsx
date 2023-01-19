import * as React from 'react'
import { SVGProps } from 'react'
const Isolated = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<circle
			cx={4.51454}
			cy={10.0567}
			r={3.19226}
			transform="rotate(45 4.51454 10.0567)"
			fill="white"
			stroke="black"
		/>
		<circle
			cx={4.51454}
			cy={19.4854}
			r={3.19226}
			transform="rotate(45 4.51454 19.4854)"
			fill="white"
			stroke="black"
		/>
		<circle
			cx={19.4858}
			cy={4.51454}
			r={3.19226}
			transform="rotate(45 19.4858 4.51454)"
			fill="white"
			stroke="black"
		/>
		<circle
			cx={13.9432}
			cy={19.4854}
			r={3.19226}
			transform="rotate(45 13.9432 19.4854)"
			fill="white"
			stroke="black"
		/>
	</svg>
)
export default Isolated
