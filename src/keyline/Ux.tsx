import * as React from 'react'
import { SVGProps } from 'react'
const Ux = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M21.5025 2L6.91705 2L6.91705 6.9637L21.5025 6.9637L21.5025 2Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M13.9297 7.00257L13.9297 20.3938"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M13.9684 12.1343L23.396 12.1343L23.396 16.2048"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M13.7919 12.1343L4.46362 12.1343L4.46362 16.2048"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M6.91706 16.2047L2 16.2047L2 21.1024L6.91706 21.1024L6.91706 16.2047Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M25.9127 16.2047L20.9956 16.2047L20.9956 21.1024L25.9127 21.1024L25.9127 16.2047Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M16.3883 21.1024L11.4712 21.1024L11.4712 26L16.3883 26L16.3883 21.1024Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Ux
