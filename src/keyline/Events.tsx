import * as React from 'react'
import { SVGProps } from 'react'
const Events = (props: SVGProps<SVGSVGElement>) => (
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
		<g>
			<path
				d="M18.6289 26H2V3.88454H26V18.9448L18.6289 26Z"
				strokeMiterlimit={10}
			/>
			<path d="M9.42334 6.34171V2" strokeMiterlimit={10} />
			<path d="M18.5764 6.34178V2.00008" strokeMiterlimit={10} />
			<path d="M2.10101 11.2501H26" strokeMiterlimit={10} />
			<path d="M18.4785 25.2163V18.4537H25.6592" strokeMiterlimit={10} />
		</g>
	</svg>
)
export default Events
