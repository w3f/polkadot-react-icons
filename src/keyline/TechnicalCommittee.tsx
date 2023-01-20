import * as React from 'react'
import { SVGProps } from 'react'
const TechnicalCommittee = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M17 6.05658C20.2203 7.48819 22.4659 10.7152 22.4659 14.4666C22.4659 14.6457 22.4608 14.8235 22.4507 15M9.5337 6.05658C6.31336 7.48819 4.06775 10.7152 4.06775 14.4666C4.06775 14.6457 4.07286 14.8235 4.08295 15M7.98605 22C9.48064 23.0496 11.3018 23.6657 13.2668 23.6657C15.4348 23.6657 17.4276 22.9158 19 21.6611"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
			fill="none"
			data-nofill="true"
		/>
		<circle
			cx={13.267}
			cy={5.26689}
			r={3.72426}
			transform="rotate(45 13.267 5.26689)"
			stroke="black"
			strokeWidth={2.5}
		/>
		<circle
			cx={5.26689}
			cy={19.0003}
			r={3.72426}
			transform="rotate(45 5.26689 19.0003)"
			stroke="black"
			strokeWidth={2.5}
		/>
		<circle
			cx={21.2669}
			cy={19.0003}
			r={3.72426}
			transform="rotate(45 21.2669 19.0003)"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default TechnicalCommittee
