import * as React from 'react'
import { SVGProps } from 'react'
const MoreVertical = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<circle
			cx={14.9941}
			cy={4.89896}
			r={2.35489}
			transform="rotate(135 14.9941 4.89896)"
		/>
		<circle
			cx={14.9941}
			cy={14.5685}
			r={2.35489}
			transform="rotate(135 14.9941 14.5685)"
		/>
		<circle
			cx={14.9941}
			cy={24.2382}
			r={2.35489}
			transform="rotate(135 14.9941 24.2382)"
		/>
	</svg>
)
export default MoreVertical
