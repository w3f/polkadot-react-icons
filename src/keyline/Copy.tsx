import * as React from 'react'
import { SVGProps } from 'react'
const Copy = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M8.99414 8.5V2H25.9941V19H19.4941" />
			<path d="M18.9941 9H1.99414V26H18.9941V9Z" />
		</g>
	</svg>
)
export default Copy
