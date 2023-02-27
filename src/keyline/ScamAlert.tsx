import * as React from 'react'
import { SVGProps } from 'react'
const ScamAlert = (props: SVGProps<SVGSVGElement>) => (
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
		<g>
			<path
				d="M13.9898 3.12793L2.19775 24.872H25.7818L13.9898 3.12793Z"
				strokeMiterlimit={10}
			/>
			<path d="M11.2275 17.3172C11.2275 18.8504 12.4704 20.0933 14.0036 20.0933C15.5368 20.0933 16.7796 18.8504 16.7796 17.3172C16.7796 16.1286 16.0326 15.1144 14.9824 14.7186C14.4656 14.5239 14.0036 14.0934 14.0036 13.5412V4.3623" />
		</g>
	</svg>
)
export default ScamAlert
