import * as React from 'react'
import { SVGProps } from 'react'
const Signature = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M22.7452 2L26 5.25483L17.5739 13.6809L13.1074 14.8885L14.3191 10.4261L22.7452 2Z"
			stroke="black"
		/>
		<path
			d="M9.77046 14.8888H9.02152C8.33752 14.8888 7.7297 14.5399 7.50598 14.0191L7.33759 13.6263C7.02251 12.9154 6.46324 12.5852 5.88964 12.5817C5.31605 12.5852 4.74795 12.9154 4.43288 13.6263L4.26448 14.0191C4.04076 14.5399 3.43294 14.8888 2.74895 14.8888H2"
			stroke="black"
			strokeMiterlimit={10}
			fill="none"
		/>
	</svg>
)
export default Signature
