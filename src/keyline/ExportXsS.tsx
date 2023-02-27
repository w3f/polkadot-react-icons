import * as React from 'react'
import { SVGProps } from 'react'
const ExportXsS = (props: SVGProps<SVGSVGElement>) => (
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
			d="M10.1464 5.7126L13.8589 2.00016L17.5775 5.7126"
			fill="none"
			data-nofill="true"
		/>
		<path d="M6.00002 26.0001L22 26.0001L22 22.3334L22 15.0001L6.00001 15.0001L6 22.3334L6.00002 26.0001Z" />
		<path
			d="M10.1464 5.71244L13.8589 2L17.5775 5.71244"
			fill="none"
			data-nofill="true"
		/>
		<path d="M13.8617 3L13.8617 17.5825" fill="none" data-nofill="true" />
	</svg>
)
export default ExportXsS
