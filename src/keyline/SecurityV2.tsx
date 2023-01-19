import * as React from 'react'
import { SVGProps } from 'react'
const SecurityV2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M1.98828 5.65688V19.4539L12.0626 25.9434L22.2748 19.362V5.65688L12.1269 1.94336L1.98828 5.65688Z"
			stroke="black"
		/>
		<path d="M8.65668 13.8253L11.6833 17.1853L17.2302 10.5169" stroke="black" />
	</svg>
)
export default SecurityV2
