import * as React from 'react'
import { SVGProps } from 'react'
const ImportToken = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M10.0002 6.90186H26.0002V22.9019H10.0002" />
		<circle cx={10} cy={14.9017} r={8} />
		<path d="M10.7999 14.9016H17.1999" />
		<path d="M10.7999 10.9019H16.3999" />
		<path d="M10.7999 18.9017H16.3999" />
		<path d="M10.0002 6.90186V22.9019" />
	</svg>
)
export default ImportToken
