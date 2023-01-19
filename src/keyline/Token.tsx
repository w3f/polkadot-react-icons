import * as React from 'react'
import { SVGProps } from 'react'
const Token = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M25.9941 10.761V14.066C25.9941 18.4843 20.6216 21.566 13.9941 21.566C7.36672 21.566 1.99414 18.4843 1.99414 14.066V10.761"
			stroke="black"
		/>
		<path
			d="M13.9941 18.0801C20.6211 18.0801 25.9941 14.4981 25.9941 10.0801C25.9941 5.66208 20.6211 2.08008 13.9941 2.08008C7.36714 2.08008 1.99414 5.66208 1.99414 10.0801C1.99414 14.4981 7.36714 18.0801 13.9941 18.0801Z"
			stroke="black"
		/>
	</svg>
)
export default Token
