import * as React from 'react'
import { SVGProps } from 'react'
const FavoriteToBe = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M26 10.8167L20.6798 16.9468L21.4365 25.0559L14.0118 21.8461L6.61084 25.0801L7.34384 16.9709L2 10.865L9.87389 9.07903L13.9882 2.08008L18.1261 9.07903L26 10.8167Z"
			strokeMiterlimit={10}
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default FavoriteToBe
