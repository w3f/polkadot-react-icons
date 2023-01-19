import * as React from 'react'
import { SVGProps } from 'react'
const Whitepaper = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 20 26"
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
			d="M11.7363 0H0.999998C0.447714 0 0 0.447715 0 1V24.4725C0 25.0248 0.447716 25.4725 1 25.4725H18.5942C19.1465 25.4725 19.5942 25.0248 19.5942 24.4725V7.85798H13.7363C12.6317 7.85798 11.7363 6.96255 11.7363 5.85798V0ZM18.5942 5.85798H13.7363V0.999999L18.5942 5.85798Z"
		/>
	</svg>
)
export default Whitepaper
