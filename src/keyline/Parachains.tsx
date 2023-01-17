import * as React from 'react'
import { SVGProps } from 'react'
const Parachains = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={28}
		viewBox="0 0 20 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<rect x={2} y={6} width={16} height={16} />
		<path d="M10 2L10 6" />
		<path d="M6 2L6 6" />
		<path d="M14 2L14 6" />
		<path d="M10 22L10 26" />
		<path d="M14 14.1738V13.8259C14 11.6168 12.2091 9.82593 10 9.82593C7.79086 9.82593 6 11.6168 6 13.8259V14.1738C6 16.3829 7.79086 18.1738 10 18.1738C12.2091 18.1738 14 16.3829 14 14.1738Z" />
	</svg>
)
export default Parachains
