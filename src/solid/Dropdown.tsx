import * as React from 'react'
import { SVGProps } from 'react'
const Dropdown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M25.7344 1.67865C26.004 1.38685 26.0754 0.96313 25.9161 0.599156C25.7569 0.235183 25.3972 0 25 0H0.99996C0.602854 0 0.243374 0.23497 0.0840149 0.598697C-0.075346 0.962425 -0.00438696 1.38598 0.264818 1.67791L12.2528 14.6779C12.442 14.8831 12.7083 14.9999 12.9874 15C13.2665 15.0001 13.533 14.8836 13.7224 14.6786L25.7344 1.67865Z"
		/>
	</svg>
)
export default Dropdown
