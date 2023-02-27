import * as React from 'react'
import { SVGProps } from 'react'
const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M23.2856 12.8995C23.6721 13.294 24.3052 13.3006 24.6998 12.9141C25.0943 12.5276 25.1008 11.8945 24.7144 11.5L14.723 1.30023C14.535 1.10832 14.2777 1.00012 14.0091 1C13.7404 0.999884 13.483 1.10786 13.2949 1.29961L3.28624 11.4993C2.89943 11.8935 2.90541 12.5267 3.29961 12.9135C3.69381 13.3003 4.32695 13.2943 4.71376 12.9001L13.0086 4.4469L13.0086 26C13.0086 26.5523 13.4563 27 14.0086 27C14.5609 27 15.0086 26.5523 15.0086 26L15.0086 4.44986L23.2856 12.8995Z"
			stroke="none"
		/>
	</svg>
)
export default ArrowUp
