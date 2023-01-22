import * as React from 'react'
import { SVGProps } from 'react'
const Parachains = (props: SVGProps<SVGSVGElement>) => (
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
		<rect x={6} y={6} width={16} height={16} />
		<path d="M14 2L14 6" />
		<path d="M10 2L10 6" />
		<path d="M18 2L18 6" />
		<path d="M14 22L14 26" />
		<path d="M18 14.1738V13.8259C18 11.6168 16.2091 9.82593 14 9.82593C11.7909 9.82593 10 11.6168 10 13.8259V14.1738C10 16.3829 11.7909 18.1738 14 18.1738C16.2091 18.1738 18 16.3829 18 14.1738Z" />
	</svg>
)
export default Parachains
