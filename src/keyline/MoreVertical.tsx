import * as React from 'react'
import { SVGProps } from 'react'
const MoreVertical = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 8 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<circle
			cx={3.99409}
			cy={3.89896}
			r={2.35489}
			transform="rotate(135 3.99409 3.89896)"
		/>
		<circle
			cx={3.99409}
			cy={13.5685}
			r={2.35489}
			transform="rotate(135 3.99409 13.5685)"
		/>
		<circle
			cx={3.99409}
			cy={23.2382}
			r={2.35489}
			transform="rotate(135 3.99409 23.2382)"
		/>
	</svg>
)
export default MoreVertical
