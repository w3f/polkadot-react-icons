import * as React from 'react'
import { SVGProps } from 'react'
const XcmMessage = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 13"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M11.2307 6.61535C11.2307 4.06636 9.16434 2 6.61535 2C4.06636 2 2 4.06636 2 6.61535C2 9.16434 4.06636 11.2307 6.61535 11.2307C9.16434 11.2307 11.2307 9.16434 11.2307 6.61535Z"
			fill="white"
			stroke="black"
		/>
		<path d="M26 2H16.7693V11.2307H26V2Z" stroke="black" />
		<path d="M11.4384 6.61816L21.3847 6.61816" stroke="black" />
	</svg>
)
export default XcmMessage
