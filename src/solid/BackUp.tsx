import * as React from 'react'
import { SVGProps } from 'react'
const BackUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 19.8439 20.7115 25.4525 13.9981 25.9623V10.6976L15.9589 12.6551C16.3498 13.0453 16.9829 13.0448 17.3731 12.6539C17.7633 12.2631 17.7628 11.6299 17.372 11.2397L13.7065 7.58037C13.3159 7.19047 12.6834 7.19066 12.293 7.58079L8.63078 11.2413C8.24016 11.6317 8.24 12.2649 8.63043 12.6555C9.02086 13.0461 9.65402 13.0463 10.0446 12.6558L11.9981 10.7033V25.962C5.28657 25.4504 0 19.8426 0 13Z"
		/>
	</svg>
)
export default BackUp
