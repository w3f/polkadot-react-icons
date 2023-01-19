import * as React from 'react'
import { SVGProps } from 'react'
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 22"
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
			d="M11.8995 1.71437C12.294 1.32789 12.3006 0.694761 11.9141 0.300228C11.5276 -0.0943054 10.8945 -0.100839 10.5 0.285635L0.300227 10.277C0.108317 10.465 0.00011605 10.7223 0 10.9909C-0.000115871 11.2596 0.107863 11.517 0.299611 11.7051L10.4993 21.7138C10.8935 22.1006 11.5267 22.0946 11.9135 21.7004C12.3003 21.3062 12.2943 20.6731 11.9001 20.2862L3.4469 11.9914L25 11.9914C25.5523 11.9914 26 11.5437 26 10.9914C26 10.4391 25.5523 9.9914 25 9.9914L3.44987 9.99139L11.8995 1.71437Z"
		/>
	</svg>
)
export default ArrowLeft
