import * as React from 'react'
import { SVGProps } from 'react'
const FundSavings = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M12.2291 16.1446L17.7474 16.1446L17.7474 18.8113L21.3215 18.8113L21.3215 15.0335C22.0583 14.5015 22.5748 13.8561 22.9785 13.0335L25.9898 13.0335L25.9898 9.0335L23.3231 9.0335C22.7308 6.99894 21.0063 5.44662 18.8771 5.10423L18.8771 1.75236C16.4883 1.75236 14.5253 2.25236 14.5253 5.10421L10.2104 5.10421C7.1422 5.10421 4.65489 7.59152 4.65489 10.6598C4.65489 13.188 6.34385 15.3219 8.65498 15.9946L8.65498 18.8113L12.2291 18.8113L12.2291 16.1446Z"
			stroke="black"
		/>
		<path
			d="M4.65495 10.8113C3.18219 10.8113 1.98828 9.61734 1.98828 8.14458"
			stroke="black"
		/>
		<path d="M9.9884 8.68166H13.9884" stroke="black" />
		<path
			d="M18.9883 8.68156L19.0064 8.6997"
			stroke="black"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default FundSavings
