import * as React from 'react'
import { SVGProps } from 'react'
const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={16}
		viewBox="0 0 24 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M1 14.1309L12.011 1.13086L23 14.1309" />
	</svg>
)
export default ChevronUp
