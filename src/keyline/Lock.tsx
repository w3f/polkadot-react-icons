import * as React from 'react'
import { SVGProps } from 'react'
const Lock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 25 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M7.12132 9.15414L7.12134 7.41857V7.41857C7.12134 4.42598 9.54731 2 12.5399 2V2C15.5325 2 17.9585 4.42598 17.9585 7.41857V7.41857L17.9585 9.15414"
			stroke="black"
		/>
		<path d="M23.0798 9.66925H2V25H23.0798V9.66925Z" stroke="black" />
	</svg>
)
export default Lock
