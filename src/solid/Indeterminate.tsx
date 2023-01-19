import * as React from 'react'
import { SVGProps } from 'react'
const Indeterminate = (props: SVGProps<SVGSVGElement>) => (
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
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1 0.863281H25C25.5523 0.863281 26 1.311 26 1.86328V25.8633C26 26.4156 25.5523 26.8633 25 26.8633H1C0.447716 26.8633 0 26.4156 0 25.8633V1.86328C0 1.311 0.447715 0.863281 1 0.863281ZM7.99459 14.8633C7.44232 14.8603 6.99703 14.4102 7.00001 13.8579C7.003 13.3056 7.45313 12.8603 8.00541 12.8633L18.395 12.9195C18.9473 12.9225 19.3925 13.3726 19.3896 13.9249C19.3866 14.4771 18.9364 14.9224 18.3842 14.9194L7.99459 14.8633Z"
		/>
	</svg>
)
export default Indeterminate
