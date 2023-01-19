import * as React from 'react'
import { SVGProps } from 'react'
const Notification = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M10 23L10 24.7874C10 25.3435 10.4508 25.797 11.0069 25.8005C11.5629 25.8039 12.0137 25.3559 12.0137 24.7998L12.0137 23"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M12 4.5L12 2.8259C12 2.26982 11.5492 1.81625 10.9931 1.81283C10.4371 1.8094 9.9863 2.25742 9.9863 2.8135L9.9863 4.5"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M2 22.9507L20.1233 22.9507" stroke="black" strokeWidth={2.5} />
		<path
			d="M4.01355 22.5V11.4658C4.01355 7.65544 7.10246 4.56653 10.9128 4.56653C14.7232 4.56653 17.8121 7.65544 17.8121 11.4658V22.5047"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Notification
