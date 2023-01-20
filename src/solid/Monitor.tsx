import * as React from 'react'
import { SVGProps } from 'react'
const Monitor = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H25C25.5523 0.5 26 0.947715 26 1.5V14.5029H0V1.5ZM0 16.5029V19.5C0 20.0523 0.447715 20.5 1 20.5H12V23H9C8.44771 23 8 23.4477 8 24C8 24.5523 8.44771 25 9 25H17C17.5523 25 18 24.5523 18 24C18 23.4477 17.5523 23 17 23H14V20.5H25C25.5523 20.5 26 20.0523 26 19.5V16.5029H0Z"
		/>
	</svg>
)
export default Monitor
