import * as React from 'react'
import { SVGProps } from 'react'
const Favorite = (props: SVGProps<SVGSVGElement>) => (
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
			d="M26 11.055L20.6798 17.1851L21.4365 25.2942L14.0118 22.0844L6.61084 25.3184L7.34384 17.2092L2 11.1032L9.87389 9.31731L13.9882 2.31836L18.1261 9.31731L26 11.055Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Favorite
