import * as React from 'react'
import { SVGProps } from 'react'
const Unchecked = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.976562 1.08008C0.976562 0.527793 1.42428 0.0800781 1.97656 0.0800781H25.9766C26.5288 0.0800781 26.9766 0.527793 26.9766 1.08008V25.0801C26.9766 25.6324 26.5288 26.0801 25.9766 26.0801H1.97656C1.42428 26.0801 0.976562 25.6324 0.976562 25.0801V1.08008ZM2.97656 2.08008V24.0801H24.9766V2.08008H2.97656Z"
		/>
	</svg>
)
export default Unchecked
