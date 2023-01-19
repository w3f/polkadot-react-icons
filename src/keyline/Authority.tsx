import * as React from 'react'
import { SVGProps } from 'react'
const Authority = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M8.3081 11.555L6.99676 7.84508C6.49584 6.42792 6.79066 4.85109 7.76978 3.71065C9.44531 1.75907 12.4658 1.75907 14.1413 3.71065C15.1204 4.85109 15.4153 6.42792 14.9143 7.84508L13.6032 11.5545C13.2574 12.5328 13.6423 13.6197 14.5268 14.1623L19.9184 17.4701V22.4414H2V17.4696L7.38524 14.1626C8.26923 13.6197 8.65381 12.5331 8.3081 11.555Z"
			stroke="black"
		/>
		<path d="M18.1264 26.3617H4.25928" stroke="black" />
		<path d="M2.55548 17.9524L19.3402 17.9524" stroke="black" />
	</svg>
)
export default Authority
