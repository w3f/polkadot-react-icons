import * as React from 'react'
import { SVGProps } from 'react'
const Close = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M25.3986 4.93806C25.7891 4.54754 25.7891 3.91437 25.3986 3.52385C25.0081 3.13333 24.3749 3.13333 23.9844 3.52385L14.7919 12.7163L5.59962 3.524C5.2091 3.13348 4.57593 3.13348 4.18541 3.524C3.79489 3.91453 3.79489 4.54769 4.18541 4.93822L13.3777 14.1305L4.1854 23.3228C3.79488 23.7134 3.79488 24.3465 4.1854 24.7371C4.57592 25.1276 5.20909 25.1276 5.59961 24.7371L14.7919 15.5447L23.9844 24.7372C24.3749 25.1277 25.0081 25.1277 25.3986 24.7372C25.7891 24.3467 25.7891 23.7135 25.3986 23.323L16.2061 14.1305L25.3986 4.93806Z"
		/>
	</svg>
)
export default Close
