import * as React from 'react'
import { SVGProps } from 'react'
const Auctions = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M17.2186 1.99999L6.34143 12.8772L11.78 18.3158L22.6572 7.43859L17.2186 1.99999Z"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M18.5783 11.5176L15.859 14.2369L23.2641 21.6421L25.9834 18.9228L18.5783 11.5176Z"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M14.4984 26L2 26"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M12.5756 22.6308L3.92285 22.6308"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Auctions
