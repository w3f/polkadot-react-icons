import * as React from 'react'
import { SVGProps } from 'react'
const ArrowBack = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={16}
		height={26}
		viewBox="0 0 16 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M15 25L1 12.988L15 1" />
	</svg>
)
export default ArrowBack
