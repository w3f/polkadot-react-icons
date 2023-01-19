import * as React from 'react'
import { SVGProps } from 'react'
const EnergyDeficiency = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2.52649 16.5832C4.22267 18.8663 6.94571 20.3465 10.0158 20.3465C15.1583 20.3465 19.3271 16.1934 19.3271 11.0702C19.3271 5.94703 15.5563 1.71485 10.4137 1.71485C9.15498 1.71485 6.988 2.20555 5.89277 2.65653"
			stroke="black"
			strokeWidth={2.5}
			strokeDasharray="0.1 4.5"
		/>
		<path
			d="M9.7787 7.28174L8.56006 11.1408H11.4713L10.1173 14.9999"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M1.30628 11.8423C1.19187 9.80479 1.74122 7.88347 2.76633 6.28875"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default EnergyDeficiency
