import * as React from 'react'
import { SVGProps } from 'react'
const FavoriteToBe = (props: SVGProps<SVGSVGElement>) => (
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
			d="M25.2741 11.3007L20.1148 17.125L20.8486 24.8295L13.6485 21.7798L6.47138 24.8524L7.18222 17.1479L2 11.3466L9.63574 9.64975L13.6256 3L17.6384 9.64975L25.2741 11.3007Z"
			strokeMiterlimit={10}
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default FavoriteToBe
