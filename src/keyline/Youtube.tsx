import * as React from 'react'
import { SVGProps } from 'react'
const Youtube = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M25 5.39978H3V22.9998H25V5.39978Z" strokeMiterlimit={40} />
		<path d="M18.5631 14.1395L11.9631 10.2886V17.9886L18.5631 14.1395Z" />
	</svg>
)
export default Youtube
