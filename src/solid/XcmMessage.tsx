import * as React from 'react'
import { SVGProps } from 'react'
const XcmMessage = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.3711 5.32857C10.9768 2.59315 8.62315 0.491211 5.77856 0.491211C2.6578 0.491211 0.12793 3.02108 0.12793 6.14184C0.12793 9.26259 2.6578 11.7925 5.77856 11.7925C8.62316 11.7925 10.9768 9.69051 11.3711 6.95507L11.3711 7.14185L12.3711 7.14185L14.2546 7.14184L15.1963 7.14184V10.7925C15.1963 11.3447 15.644 11.7925 16.1963 11.7925H25.4975C26.0498 11.7925 26.4975 11.3447 26.4975 10.7925V1.49121C26.4975 0.938928 26.0498 0.491211 25.4975 0.491211H16.1963C15.644 0.491211 15.1963 0.938926 15.1963 1.49121V5.14184L14.2546 5.14184L12.3711 5.14185L11.3711 5.14185L11.3711 5.32857Z"
		/>
	</svg>
)
export default XcmMessage
