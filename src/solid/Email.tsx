import * as React from 'react'
import { SVGProps } from 'react'
const Email = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M26 1.8513L13.6726 13.055C13.2856 13.4067 12.6931 13.4009 12.3131 13.0417L0 1.40341V21.219C0 21.7713 0.447715 22.219 1 22.219H25C25.5523 22.219 26 21.7713 26 21.219V1.8513ZM25.0613 0.00184796L13.0133 10.9515L1.42679 0H25C25.0206 0 25.041 0.000621908 25.0613 0.00184796Z"
		/>
	</svg>
)
export default Email
