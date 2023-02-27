import * as React from 'react'
import { SVGProps } from 'react'
const Proxy = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1 6.28348C1 3.36549 3.3655 1 6.28348 1H21.6409C24.5589 1 26.9244 3.36549 26.9244 6.28348C26.9244 9.20147 24.5589 11.567 21.6409 11.567H14.9872V16.433H21.6409C24.5589 16.433 26.9244 18.7985 26.9244 21.7165C26.9244 24.6345 24.5589 27 21.6409 27H6.28348C3.3655 27 1 24.6345 1 21.7165C1 18.7985 3.36549 16.433 6.28348 16.433H12.9872V11.567H6.28348C3.36549 11.567 1 9.20147 1 6.28348Z"
			stroke="none"
		/>
	</svg>
)
export default Proxy
