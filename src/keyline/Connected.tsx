import * as React from 'react'
import { SVGProps } from 'react'
const Connected = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 13"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M16.4675 11.6279L21.241 11.6279C23.8532 11.6279 25.9708 9.51032 25.9708 6.89813V6.89813C25.9708 4.28593 23.8532 2.16832 21.241 2.16832L16.4675 2.16832"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M11.4206 2.13085L6.70051 2.13085C4.08831 2.13085 1.9707 4.24845 1.9707 6.86065V6.86065C1.9707 9.47285 4.08831 11.5905 6.70051 11.5905L11.4206 11.5905"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M20.079 6.86746L7.83264 6.86746"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default Connected
