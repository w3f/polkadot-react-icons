import * as React from 'react'
import { SVGProps } from 'react'
const Feeless = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M26 12.6799V16.6799C26 21.0982 20.6274 24.1799 14 24.1799C7.37258 24.1799 2 21.0982 2 16.6799V12.6799" />
		<path d="M14 20.6799C20.6274 20.6799 26 17.0982 26 12.6799C26 8.26165 20.6274 4.67993 14 4.67993C7.37258 4.67993 2 8.26165 2 12.6799C2 17.0982 7.37258 20.6799 14 20.6799Z" />
		<path d="M4.64807 25.8601L23.352 2.99976" />
	</svg>
)
export default Feeless
