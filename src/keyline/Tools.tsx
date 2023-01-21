import * as React from 'react'
import { SVGProps } from 'react'
const Tools = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M9 7.00002H2M2 2L9 2V20.2857L5.5 26L2 20.2857L2 2Z" />
		<path d="M18.5001 7.99993L15 7.99993M18.4998 13.9999H15M18.5001 19.6434H15M15 2L22 2V26H15L15 2Z" />
	</svg>
)
export default Tools
