import * as React from 'react'
import { SVGProps } from 'react'
const TestnetToken = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M24 9.95803V13C24 17.0501 19.0751 19.875 13 19.875C6.92487 19.875 2 17.0501 2 13V9.95803" />
		<path d="M13 16.6667C19.0751 16.6667 24 13.3834 24 9.33333C24 5.28325 19.0751 2 13 2C6.92487 2 2 5.28325 2 9.33333C2 13.3834 6.92487 16.6667 13 16.6667Z" />
		<path d="M15.7515 6.63147L10.2514 12.1314" />
		<path d="M15.7515 12.1315L10.2515 6.63143" />
	</svg>
)
export default TestnetToken
