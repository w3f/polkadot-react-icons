import * as React from 'react'
import { SVGProps } from 'react'
const Nominators = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M21.4273 6.57269H2V26H21.4273V6.57269Z" />
		<path
			d="M7.11935 14.0187L12.3012 18.7889L25.0074 2"
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default Nominators
