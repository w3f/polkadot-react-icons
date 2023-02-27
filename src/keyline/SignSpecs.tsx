import * as React from 'react'
import { SVGProps } from 'react'
const SignSpecs = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path d="M26.9941 3.93292H2.99414V24.152H26.9941V3.93292Z" />
			<path d="M19.4461 11.9332L14.724 16.6553L9.99401 11.9332" />
			<path d="M14.7202 15.5L14.7202 4.5" />
		</g>
	</svg>
)
export default SignSpecs
