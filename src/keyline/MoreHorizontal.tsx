import * as React from 'react'
import { SVGProps } from 'react'
const MoreHorizontal = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={8}
		viewBox="0 0 28 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<circle
			cx={4.33032}
			cy={4.33032}
			r={2.35489}
			transform="rotate(45 4.33032 4.33032)"
		/>
		<circle
			cx={13.9998}
			cy={4.33032}
			r={2.35489}
			transform="rotate(45 13.9998 4.33032)"
		/>
		<circle
			cx={23.6696}
			cy={4.33032}
			r={2.35489}
			transform="rotate(45 23.6696 4.33032)"
		/>
	</svg>
)
export default MoreHorizontal
