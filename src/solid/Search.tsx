import * as React from 'react'
import { SVGProps } from 'react'
const Search = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 27"
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
			d="M11.4372 19.6307C10.9289 19.7113 10.4077 19.7533 9.87663 19.7533C4.42242 19.7533 0 15.3308 0 9.87663C0 4.42242 4.42135 0 9.87663 0C15.3319 0 19.7533 4.42242 19.7533 9.87663C19.7533 12.4192 18.7925 14.7375 17.2141 16.4881L20.2375 21.7288C20.7893 22.6853 20.4615 23.908 19.5052 24.4602L17.277 25.7469C16.3203 26.2993 15.097 25.9714 14.5447 25.0147L11.4372 19.6307ZM16.2769 24.0149L13.7392 19.6181C14.5605 19.3262 15.3288 18.9258 16.0289 18.436L18.5051 22.7282L16.2769 24.0149Z"
		/>
	</svg>
)
export default Search
