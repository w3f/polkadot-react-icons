import * as React from 'react'
import { SVGProps } from 'react'
const MobileApp = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M22.5109 2.33008H6V26.3301H22.5109V2.33008Z" />
		<path d="M13.3052 23.0423H15.205" />
	</svg>
)
export default MobileApp
