import * as React from 'react'
import { SVGProps } from 'react'
const Alice = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M12.0433 10.5398L11.0695 9.41161C9.51415 7.61093 9.63743 4.90867 11.3497 3.25618C13.0856 1.58127 15.8364 1.58127 17.5724 3.25618C19.2846 4.90867 19.4079 7.61093 17.8526 9.41161L16.8787 10.5386C16.3694 11.1276 23.9295 22.6689 23.9295 22.6689H19.444V26H9.48052V22.6689H5C5 22.6689 12.5514 11.1301 12.0433 10.5398Z" />
	</svg>
)
export default Alice
