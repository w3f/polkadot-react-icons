import * as React from 'react'
import { SVGProps } from 'react'
const ExportXsS = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 20 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M6.14642 5.7126L9.85887 2.00016L13.5775 5.7126"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<path
			d="M2.00002 26.0001L18 26.0001L18 22.3334L18 15.0001L2.00001 15.0001L2 22.3334L2.00002 26.0001Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M6.14642 5.71244L9.85887 2L13.5775 5.71244"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<path
			d="M9.8617 3L9.86169 17.5825"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
	</svg>
)
export default ExportXsS
