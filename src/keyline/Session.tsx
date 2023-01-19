import * as React from 'react'
import { SVGProps } from 'react'
const Session = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M14.6291 26.9433C19.9601 26.9433 24.2817 22.6217 24.2817 17.2907C24.2817 11.9598 19.9601 7.63818 14.6291 7.63818C9.29816 7.63818 4.97656 11.9598 4.97656 17.2907C4.97656 22.6217 9.29816 26.9433 14.6291 26.9433Z"
			stroke="black"
		/>
		<path d="M14.6279 12.242V18.1051L12.3283 20.8954" stroke="black" />
		<path d="M14.614 7.63873L14.614 2.94336" stroke="black" />
		<path d="M17.7889 2.95581L11.4682 2.95581" stroke="black" />
	</svg>
)
export default Session
