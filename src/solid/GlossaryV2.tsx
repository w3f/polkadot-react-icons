import * as React from 'react'
import { SVGProps } from 'react'
const GlossaryV2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 1.00119V18.1077C0 18.4817 0.208761 18.8245 0.541108 18.9962L12.0001 24.9146V5.03164L1.42293 0.0950297C0.75994 -0.2144 0 0.269555 0 1.00119ZM14.0001 5.03157V24.9145L25.459 18.9962C25.7913 18.8245 26.0001 18.4817 26.0001 18.1077V1.0012C26.0001 0.269556 25.2402 -0.2144 24.5772 0.0950302L14.0001 5.03157Z"
		/>
	</svg>
)
export default GlossaryV2
