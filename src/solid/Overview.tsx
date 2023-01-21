import * as React from 'react'
import { SVGProps } from 'react'
const Overview = (props: SVGProps<SVGSVGElement>) => (
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
			d="M14.578 1.37733C14.2317 1.13203 13.7683 1.13203 13.422 1.37733L1.42198 9.87734C1.15731 10.0648 1 10.369 1 10.6934V26.1934C1 26.7456 1.44772 27.1934 2 27.1934H11.5C12.0523 27.1934 12.5 26.7456 12.5 26.1934V18.6934H16V26.1934C16 26.7456 16.4477 27.1934 17 27.1934H26C26.5523 27.1934 27 26.7456 27 26.1934V10.6934C27 10.369 26.8427 10.0648 26.578 9.87734L14.578 1.37733Z"
			stroke="none"
		/>
	</svg>
)
export default Overview
