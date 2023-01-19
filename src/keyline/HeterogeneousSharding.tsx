import * as React from 'react'
import { SVGProps } from 'react'
const HeterogeneousSharding = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 25 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M5.1093 17.7642L8.25016 12.37"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M18.8338 17.7642L15.693 12.37"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M11.9553 6.49153C13.8158 6.49153 15.324 5.48605 15.324 4.24577C15.324 3.00548 13.8158 2 11.9553 2C10.0949 2 8.58669 3.00548 8.58669 4.24577C8.58669 5.48605 10.0949 6.49153 11.9553 6.49153V6.49153Z"
			stroke="black"
		/>
		<path
			d="M15.324 4.24583C15.324 5.48612 13.8158 6.4916 11.9553 6.4916C10.0949 6.4916 8.58669 5.48612 8.58669 4.24583V7.65046C8.58669 8.89075 10.0949 9.7561 11.9553 9.7561C13.8158 9.7561 15.324 8.89075 15.324 7.65046V4.24583Z"
			stroke="black"
		/>
		<rect x={2} y={21} width={5.14286} height={5.14286} stroke="black" />
		<path
			d="M20.5714 21L18 26.1429H20.5714H23.1429L20.5714 21Z"
			stroke="black"
		/>
	</svg>
)
export default HeterogeneousSharding
