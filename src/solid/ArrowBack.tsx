import * as React from 'react'
import { SVGProps } from 'react'
const ArrowBack = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 16 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.7589 25.6511C15.3993 26.0703 14.768 26.1185 14.3488 25.7589L0.348814 13.7469C0.127262 13.5568 -0.00016292 13.2794 -1.79359e-05 12.9875C0.000127048 12.6955 0.127827 12.4182 0.349567 12.2284L14.3496 0.240406C14.7691 -0.118809 15.4003 -0.069933 15.7596 0.349571C16.1188 0.769075 16.0699 1.40035 15.6504 1.75957L2.53657 12.9887L15.6511 24.241C16.0703 24.6007 16.1185 25.232 15.7589 25.6511Z"
		/>
	</svg>
)
export default ArrowBack
