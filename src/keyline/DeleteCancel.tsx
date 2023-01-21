import * as React from 'react'
import { SVGProps } from 'react'
const DeleteCancel = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M26.0527 6.125H9.35708L2.05273 14.4728L9.35708 22.8207H26.0527V6.125Z" />
			<path d="M14.0527 17.9231L20.8875 11.1618" />
			<path d="M14.091 11.125L20.8523 17.9598" />
		</g>
	</svg>
)
export default DeleteCancel
