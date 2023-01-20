import * as React from 'react'
import { SVGProps } from 'react'
const Code = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M7.90652 15.3812L1.93652 10.4112L7.90652 5.43115"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M20.0063 5.42139L25.9963 10.4114L20.0063 15.3914"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M16.9814 1.41113L10.9314 19.4011"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default Code
