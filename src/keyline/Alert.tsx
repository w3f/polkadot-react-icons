import * as React from 'react'
import { SVGProps } from 'react'
const Alert = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M13.9898 2.12793L2.19775 23.872H25.7818L13.9898 2.12793Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M13.9992 16.7247L13.9897 9.59448"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M14.0093 20.1309L13.9912 20.1128"
			stroke="black"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Alert
