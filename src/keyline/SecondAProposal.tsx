import * as React from 'react'
import { SVGProps } from 'react'
const SecondAProposal = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M23.4615 8.92308V2H4.99999V26H23.4615V7.98154" />
		<path d="M19.7691 5.69208L8.69221 5.69208" strokeMiterlimit={10} />
		<path d="M19.7692 9.38446H8.69221" strokeMiterlimit={10} />
		<path d="M20.2628 18.0844L16.963 21.3842L15.5942 20.0155" />
		<path d="M13.0077 18.0844L9.70782 21.3842L8.3391 20.0155" />
	</svg>
)
export default SecondAProposal
