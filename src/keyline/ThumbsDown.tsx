import * as React from 'react'
import { SVGProps } from 'react'
const ThumbsDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M14.1401 16.2978L21.2372 16.2978C22.5958 16.2978 23.6972 15.1964 23.6972 13.8378C23.6972 12.4792 22.5958 11.3778 21.2372 11.3778L20.2221 11.3778L21.894 11.3777C23.0442 11.3777 23.9766 10.2763 23.9766 8.9177C23.9766 7.5591 23.0442 6.45773 21.894 6.45773L19.7877 6.45773C20.9378 6.45773 21.8344 5.52958 21.8344 3.97169C21.8344 2.61309 20.5034 1.51172 19.3533 1.51172L16.9656 1.51172L13.3542 1.51177C9.31182 1.51187 7.69461 5.65141 7.69461 5.65141L1.97656 5.65141L1.97656 14.7957L7.69461 14.8378C7.69461 14.8378 10.1378 20.1212 12.1473 24.3328C12.7178 25.5283 14.1657 26.0065 15.3405 25.3945C16.3949 24.8453 16.8739 23.5958 16.4569 22.4825L14.1401 16.2978Z"
			stroke="black"
		/>
	</svg>
)
export default ThumbsDown
