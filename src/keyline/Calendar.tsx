import * as React from 'react'
import { SVGProps } from 'react'
const Calendar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M18.6289 26H2V3.88452H26V18.9448V26H18.6289Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path d="M9.42346 6.34171V2" stroke="black" strokeMiterlimit={10} />
		<path d="M18.5764 6.34183V2.00012" stroke="black" strokeMiterlimit={10} />
		<path d="M3 11.2501H25" stroke="black" strokeMiterlimit={10} />
	</svg>
)
export default Calendar
