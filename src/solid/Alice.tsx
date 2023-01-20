import * as React from 'react'
import { SVGProps } from 'react'
const Alice = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M8.04331 9.53983L7.0695 8.41161C5.51415 6.61093 5.63743 3.90867 7.34969 2.25618C9.08561 0.581274 11.8364 0.581274 13.5724 2.25618C15.2846 3.90867 15.4079 6.61093 13.8526 8.41161L12.8787 9.53858C12.3694 10.1276 19.9295 21.6689 19.9295 21.6689H15.444V25H5.48052V21.6689H1C1 21.6689 8.55139 10.1301 8.04331 9.53983Z"
			stroke="black"
			strokeWidth={2}
		/>
	</svg>
)
export default Alice
