import * as React from 'react'
import { SVGProps } from 'react'
const Healthcare = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2.02344 5.28188V19.0789L12.0977 25.5684L22.3099 18.987V5.28188L12.1621 1.56836L2.02344 5.28188Z"
			fill="white"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M8.70978 12.5192L15.3695 12.5552"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M12.0586 9.2083L12.0226 15.868" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default Healthcare
