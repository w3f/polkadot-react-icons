import * as React from 'react'
import { SVGProps } from 'react'
const Unchecked = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M23 0H1C0.447715 0 0 0.447716 0 1V23C0 23.5523 0.447716 24 1 24H23C23.5523 24 24 23.5523 24 23V1C24 0.447715 23.5523 0 23 0Z" />
	</svg>
)
export default Unchecked
