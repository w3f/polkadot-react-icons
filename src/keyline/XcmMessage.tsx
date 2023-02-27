import * as React from 'react'
import { SVGProps } from 'react'
const XcmMessage = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M11.2307 14.6156C11.2307 12.0666 9.16434 10.0002 6.61535 10.0002C4.06636 10.0002 2 12.0666 2 14.6156C2 17.1646 4.06636 19.2309 6.61535 19.2309C9.16434 19.2309 11.2307 17.1646 11.2307 14.6156Z" />
		<path d="M26 10.0002H16.7693V19.231H26V10.0002Z" />
		<path d="M11.4384 14.6184L21.3847 14.6184" />
	</svg>
)
export default XcmMessage
