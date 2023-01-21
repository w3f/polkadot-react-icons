import * as React from 'react'
import { SVGProps } from 'react'
const Favorite = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M26 10.055L20.6798 16.1851L21.4365 24.2942L14.0118 21.0844L6.61084 24.3184L7.34384 16.2092L2 10.1032L9.87389 8.31731L13.9882 1.31836L18.1261 8.31731L26 10.055Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Favorite
