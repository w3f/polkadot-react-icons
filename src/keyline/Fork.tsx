import * as React from 'react'
import { SVGProps } from 'react'
const Fork = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M10.6821 9.85657H2V18.5387H10.6821V9.85657Z" />
		<path d="M25.9999 3H17.3177V11.6822H25.9999V3Z" />
		<path d="M25.9998 16.8913H17.3177V25.5735H25.9998V16.8913Z" />
		<path d="M16.5927 8.5L11.2624 12.2323" />
		<path d="M11.2333 16.3355L16.7327 20.1862" />
	</svg>
)
export default Fork
