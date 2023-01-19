import * as React from 'react'
import { SVGProps } from 'react'
const Feeless = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M26 11.6799V15.6799C26 20.0982 20.6274 23.1799 14 23.1799C7.37258 23.1799 2 20.0982 2 15.6799V11.6799"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M14 19.6799C20.6274 19.6799 26 16.0982 26 11.6799C26 7.26165 20.6274 3.67993 14 3.67993C7.37258 3.67993 2 7.26165 2 11.6799C2 16.0982 7.37258 19.6799 14 19.6799Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M4.64807 24.8601L23.352 1.99976"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Feeless
