import * as React from 'react'
import { SVGProps } from 'react'
const SignSpecs = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={24}
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M25.9941 1.93292H1.99414V22.152H25.9941V1.93292Z" />
		<path d="M18.4461 9.93317L13.724 14.6553L8.99401 9.93317" />
		<path d="M13.7202 13.5L13.7202 2.5" />
	</svg>
)
export default SignSpecs
