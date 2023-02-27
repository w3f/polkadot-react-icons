import * as React from 'react'
import { SVGProps } from 'react'
const Proposal = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M23.4615 8.92308V2H5.00001V26H23.4615V7.98154" />
		<path d="M19.7691 5.69211L8.6922 5.69211" strokeMiterlimit={10} />
		<path d="M19.7692 9.38443H8.6922" strokeMiterlimit={10} />
		<path d="M19.7693 17.879L16.2636 21.3846L14.8095 19.9305" />
	</svg>
)
export default Proposal
