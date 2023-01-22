import * as React from 'react'
import { SVGProps } from 'react'
const Notification = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path d="M13 24L13 25.7874C13 26.3435 13.4508 26.797 14.0069 26.8005C14.5629 26.8039 15.0137 26.3559 15.0137 25.7998L15.0137 24" />
			<path d="M15 5.5L15 3.8259C15 3.26982 14.5492 2.81625 13.9931 2.81283C13.4371 2.8094 12.9863 3.25742 12.9863 3.8135L12.9863 5.5" />
			<path d="M5 23.9507L23.1233 23.9507" />
			<path d="M7.01355 23.5V12.4658C7.01355 8.65544 10.1025 5.56653 13.9128 5.56653C17.7232 5.56653 20.8121 8.65544 20.8121 12.4658V23.5047" />
		</g>
	</svg>
)
export default Notification
