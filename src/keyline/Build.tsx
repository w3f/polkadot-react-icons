import * as React from 'react'
import { SVGProps } from 'react'
const Build = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M4 22.5743V12.0632L13.0655 16.4888V27L4 22.5743Z" />
			<path d="M26.16 22.5743V12.0632L17.0945 16.4888V27L26.16 22.5743Z" />
			<path
				d="M13.0268 3.97772L15.08 3L17.1332 3.97772M13.0268 11.7994L15.08 12.7772L17.1332 11.7994M22.9017 9.05252L25.346 7.88858L22.9017 6.72463M7.25825 6.72463L4.81396 7.88858L7.25825 9.05252"
				fill="none"
				data-nofill="true"
			/>
		</g>
	</svg>
)
export default Build
