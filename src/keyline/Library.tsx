import * as React from 'react'
import { SVGProps } from 'react'
const Library = (props: SVGProps<SVGSVGElement>) => (
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
			<rect x={1.29297} y={2} width={4} height={24} />
			<rect x={9} y={2} width={4} height={24} />
			<rect
				x={16.3813}
				y={3.03516}
				width={4}
				height={24}
				transform="rotate(-15 16.3813 3.03516)"
			/>
		</g>
	</svg>
)
export default Library
