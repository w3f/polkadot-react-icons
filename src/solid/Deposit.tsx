import * as React from 'react'
import { SVGProps } from 'react'
const Deposit = (props: SVGProps<SVGSVGElement>) => (
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
			fillRule="evenodd"
			clipRule="evenodd"
			d="M20.7234 16.6282C21.114 16.2378 21.1142 15.6047 20.7238 15.214C20.3333 14.8234 19.7002 14.8233 19.3095 15.2137L15.4865 19.0348V2C15.4865 1.44772 15.0388 1 14.4865 1C13.9342 1 13.4865 1.44772 13.4865 2V19.0369L9.65823 15.215C9.26738 14.8248 8.63422 14.8253 8.24402 15.2162C7.85383 15.607 7.85436 16.2402 8.24521 16.6304L13.78 22.1559C14.1705 22.5458 14.8031 22.5456 15.1934 22.1555L20.7234 16.6282ZM22.706 25H6C5.44772 25 5 25.4477 5 26C5 26.5523 5.44772 27 6 27H22.706C23.2583 27 23.706 26.5523 23.706 26C23.706 25.4477 23.2583 25 22.706 25Z"
			stroke="none"
		/>
	</svg>
)
export default Deposit
