import * as React from 'react'
import { SVGProps } from 'react'
const Check = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2 8.94592L9.76634 16L24 2"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default Check
