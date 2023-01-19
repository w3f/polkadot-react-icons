import * as React from 'react'
import { SVGProps } from 'react'
const Alice = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 23 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M9.04331 10.5398L8.0695 9.41161C6.51415 7.61093 6.63743 4.90867 8.34969 3.25618C10.0856 1.58127 12.8364 1.58127 14.5724 3.25618C16.2846 4.90867 16.4079 7.61093 14.8526 9.41161L13.8787 10.5386C13.3694 11.1276 20.9295 22.6689 20.9295 22.6689H16.444V26H6.48052V22.6689H2C2 22.6689 9.55139 11.1301 9.04331 10.5398Z"
			fill="white"
			stroke="black"
		/>
	</svg>
)
export default Alice
