import * as React from 'react'
import { SVGProps } from 'react'
const Alert = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			d="M13.9898 3.12793L2.19775 24.872H25.7818L13.9898 3.12793Z"
			strokeMiterlimit={10}
		/>
		<path d="M13.9992 17.7247L13.9897 10.5945" strokeMiterlimit={10} />
		<path d="M14.0093 21.1309L13.9912 21.1128" strokeMiterlimit={10} />
	</svg>
)
export default Alert
