import * as React from 'react'
import { SVGProps } from 'react'
const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.9914 25C10.4391 25 9.99139 24.5523 9.99139 24L9.9914 1C9.9914 0.447716 10.4391 -1.95705e-08 10.9914 -4.37117e-08C11.5437 -6.78528e-08 11.9914 0.447716 11.9914 1L11.9914 24C11.9914 24.5523 11.5437 25 10.9914 25Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.300227 14.0859C0.694761 13.6994 1.32789 13.706 1.71437 14.1005L10.992 23.5716L20.2862 14.0999C20.6731 13.7057 21.3062 13.6997 21.7004 14.0865C22.0946 14.4733 22.1006 15.1065 21.7138 15.5007L11.7051 25.7004C11.517 25.8921 11.2596 26.0001 10.9909 26C10.7223 25.9999 10.465 25.8917 10.277 25.6998L0.285634 15.5C-0.10084 15.1055 -0.094306 14.4724 0.300227 14.0859Z"
			fill="black"
		/>
	</svg>
)
export default ArrowDown
