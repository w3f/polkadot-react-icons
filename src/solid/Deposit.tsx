import * as React from 'react'
import { SVGProps } from 'react'
const Deposit = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 19 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.7234 15.6282C16.114 15.2378 16.1142 14.6047 15.7238 14.214C15.3333 13.8234 14.7002 13.8233 14.3095 14.2137L10.4865 18.0348V1C10.4865 0.447715 10.0388 0 9.4865 0C8.93422 0 8.4865 0.447715 8.4865 1V18.0369L4.65823 14.215C4.26738 13.8248 3.63422 13.8253 3.24402 14.2162C2.85383 14.607 2.85436 15.2402 3.24521 15.6304L8.77999 21.1559C9.17054 21.5458 9.80311 21.5456 10.1934 21.1555L15.7234 15.6282ZM17.706 24H1C0.447715 24 0 24.4477 0 25C0 25.5523 0.447715 26 1 26H17.706C18.2583 26 18.706 25.5523 18.706 25C18.706 24.4477 18.2583 24 17.706 24Z"
		/>
	</svg>
)
export default Deposit
