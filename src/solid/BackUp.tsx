import * as React from 'react'
import { SVGProps } from 'react'
const BackUp = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1 14C1 6.8203 6.8203 1 14 1C21.1797 1 27 6.8203 27 14C27 20.8439 21.7115 26.4525 14.9981 26.9623V11.6976L16.9589 13.6551C17.3498 14.0453 17.9829 14.0448 18.3731 13.6539C18.7633 13.2631 18.7628 12.6299 18.372 12.2397L14.7065 8.58037C14.3159 8.19047 13.6834 8.19066 13.293 8.58079L9.63078 12.2413C9.24016 12.6317 9.24 13.2649 9.63043 13.6555C10.0209 14.0461 10.654 14.0463 11.0446 13.6558L12.9981 11.7033V26.962C6.28657 26.4504 1 20.8426 1 14Z"
			stroke="none"
		/>
	</svg>
)
export default BackUp
