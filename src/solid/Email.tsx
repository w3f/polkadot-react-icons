import * as React from 'react'
import { SVGProps } from 'react'
const Email = (props: SVGProps<SVGSVGElement>) => (
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
			fillRule="evenodd"
			clipRule="evenodd"
			d="M27 4.8513L14.6726 16.055C14.2856 16.4067 13.6931 16.4009 13.3131 16.0417L1 4.40341V24.219C1 24.7713 1.44772 25.219 2 25.219H26C26.5523 25.219 27 24.7713 27 24.219V4.8513ZM26.0613 3.00185L14.0133 13.9515L2.42679 3H26C26.0206 3 26.041 3.00062 26.0613 3.00185Z"
			stroke="none"
		/>
	</svg>
)
export default Email
