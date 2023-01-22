import * as React from 'react'
import { SVGProps } from 'react'
const TechnicalCommittee = (props: SVGProps<SVGSVGElement>) => (
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
			d="M18 8.05658C21.2203 9.48819 23.4659 12.7152 23.4659 16.4666C23.4659 16.6457 23.4608 16.8235 23.4507 17M10.5337 8.05658C7.31336 9.48819 5.06775 12.7152 5.06775 16.4666C5.06775 16.6457 5.07286 16.8235 5.08295 17M8.98605 24C10.4806 25.0496 12.3018 25.6657 14.2668 25.6657C16.4348 25.6657 18.4276 24.9158 20 23.6611"
			strokeMiterlimit={10}
			fill="none"
			data-nofill="true"
		/>
		<circle
			cx={14.267}
			cy={7.26689}
			r={3.72426}
			transform="rotate(45 14.267 7.26689)"
		/>
		<circle
			cx={6.26689}
			cy={21.0003}
			r={3.72426}
			transform="rotate(45 6.26689 21.0003)"
		/>
		<circle
			cx={22.2669}
			cy={21.0003}
			r={3.72426}
			transform="rotate(45 22.2669 21.0003)"
		/>
	</svg>
)
export default TechnicalCommittee
