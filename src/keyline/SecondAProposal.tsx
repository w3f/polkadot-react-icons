import * as React from 'react'
import { SVGProps } from 'react'
const SecondAProposal = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M20.4615 8.92308V2H1.99999V26H20.4615V7.98154"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M16.7691 5.69208L5.69221 5.69208"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M16.7692 9.38446H5.69221"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M17.2628 18.0844L13.963 21.3842L12.5942 20.0155"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M10.0077 18.0844L6.70781 21.3842L5.3391 20.0155"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default SecondAProposal
