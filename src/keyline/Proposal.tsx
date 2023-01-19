import * as React from 'react'
import { SVGProps } from 'react'
const Proposal = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M20.4615 8.92308V2H2.00001V26H20.4615V7.98154" stroke="black" />
		<path
			d="M16.7691 5.69211L5.6922 5.69211"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path d="M16.7692 9.38443H5.6922" stroke="black" strokeMiterlimit={10} />
		<path d="M16.7693 17.879L13.2636 21.3846L11.8095 19.9305" stroke="black" />
	</svg>
)
export default Proposal
