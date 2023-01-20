import * as React from 'react'
import { SVGProps } from 'react'
const Block = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M-4.57764e-05 13C-4.57764e-05 5.8203 5.82025 0 13 0C16.3603 0 19.4228 1.27497 21.7303 3.36754L3.12534 21.4557C1.17698 19.1825 -4.57764e-05 16.2287 -4.57764e-05 13ZM4.53934 22.8704C6.81319 24.8213 9.76892 26 13 26C20.1797 26 26 20.1797 26 13C26 9.90056 24.9153 7.05446 23.1048 4.82059L4.53934 22.8704Z"
		/>
	</svg>
)
export default Block
