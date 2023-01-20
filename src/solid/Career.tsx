import * as React from 'react'
import { SVGProps } from 'react'
const Career = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8.38129 0C7.829 0 7.38129 0.447715 7.38129 1V4.62793H1C0.447715 4.62793 0 5.07564 0 5.62793V11.3442H26V5.62793C26 5.07564 25.5523 4.62793 25 4.62793H18.6192V1C18.6192 0.447715 18.1714 0 17.6192 0H8.38129ZM26 13.3442H0V22.2376C0 22.7899 0.447715 23.2376 1 23.2376H25C25.5523 23.2376 26 22.7899 26 22.2376V13.3442ZM9.38129 4.62793H16.6192V2H9.38129V4.62793Z"
		/>
	</svg>
)
export default Career
