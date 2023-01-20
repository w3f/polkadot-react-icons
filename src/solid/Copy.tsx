import * as React from 'react'
import { SVGProps } from 'react'
const Copy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.99414 1C7.99414 0.447715 8.44186 0 8.99414 0H25.9941C26.5464 0 26.9941 0.447715 26.9941 1V18C26.9941 18.5523 26.5464 19 25.9941 19H19.9941V25C19.9941 25.5523 19.5464 26 18.9941 26H1.99414C1.44186 26 0.994141 25.5523 0.994141 25V8C0.994141 7.44772 1.44186 7 1.99414 7H7.99414V1ZM19.9941 17V8C19.9941 7.44772 19.5464 7 18.9941 7H9.99414V2H24.9941V17H19.9941Z"
		/>
	</svg>
)
export default Copy
