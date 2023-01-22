import * as React from 'react'
import { SVGProps } from 'react'
const MoreHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
		<circle
			cx={4.33032}
			cy={14.3303}
			r={2.35489}
			transform="rotate(45 4.33032 14.3303)"
		/>
		<circle
			cx={13.9998}
			cy={14.3303}
			r={2.35489}
			transform="rotate(45 13.9998 14.3303)"
		/>
		<circle
			cx={23.6696}
			cy={14.3303}
			r={2.35489}
			transform="rotate(45 23.6696 14.3303)"
		/>
	</svg>
)
export default MoreHorizontal
