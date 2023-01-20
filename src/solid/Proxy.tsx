import * as React from 'react'
import { SVGProps } from 'react'
const Proxy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 5.28348C0 2.36549 2.3655 0 5.28348 0H20.6409C23.5589 0 25.9244 2.36549 25.9244 5.28348C25.9244 8.20147 23.5589 10.567 20.6409 10.567H13.9872V15.433H20.6409C23.5589 15.433 25.9244 17.7985 25.9244 20.7165C25.9244 23.6345 23.5589 26 20.6409 26H5.28348C2.3655 26 0 23.6345 0 20.7165C0 17.7985 2.36549 15.433 5.28348 15.433H11.9872V10.567H5.28348C2.36549 10.567 0 8.20147 0 5.28348Z"
		/>
	</svg>
)
export default Proxy
