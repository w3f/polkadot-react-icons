import * as React from 'react'
import { SVGProps } from 'react'
const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M9.99146 22.5502L9.99146 1C9.99146 0.447716 10.4392 0 10.9915 0C11.5437 0 11.9915 0.447716 11.9915 1L11.9915 22.553L20.2862 14.0999C20.6731 13.7057 21.3062 13.6997 21.7004 14.0865C22.0946 14.4733 22.1006 15.1065 21.7138 15.5007L11.7051 25.7004C11.517 25.8921 11.2596 26.0001 10.9909 26C10.7223 25.9999 10.465 25.8917 10.277 25.6998L0.285635 15.5C-0.100839 15.1055 -0.0943056 14.4724 0.300228 14.0859C0.694761 13.6994 1.32789 13.706 1.71437 14.1005L9.99146 22.5502Z"
		/>
	</svg>
)
export default ArrowDown
