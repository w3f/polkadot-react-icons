import * as React from 'react'
import { SVGProps } from 'react'
const ReferendaV2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 23 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M20.9559 19.3827V26.7229H1.38208V1.27689H20.9559V20.381" />
		<path
			d="M13.9644 13.0457L17.0411 14.3537V5.00011L10.89 5V14.3606L13.9644 13.0457Z"
			strokeMiterlimit={10}
		/>
		<path d="M17.0411 22.8083H5.29675" strokeMiterlimit={10} />
		<path d="M17.0411 18.8933H5.29675" strokeMiterlimit={10} />
	</svg>
)
export default ReferendaV2
