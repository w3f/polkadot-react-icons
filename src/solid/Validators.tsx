import * as React from 'react'
import { SVGProps } from 'react'
const Validators = (props: SVGProps<SVGSVGElement>) => (
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
			d="M14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27C21.1797 27 27 21.1797 27 14C27 10.8876 25.9062 8.03061 24.0821 5.79253L13.8588 19.3007C13.6886 19.5255 13.4315 19.6681 13.1507 19.6933C12.8699 19.7184 12.5915 19.6239 12.3841 19.433L7.36136 14.8093C6.95503 14.4353 6.92885 13.8026 7.3029 13.3963C7.67695 12.99 8.30957 12.9638 8.71591 13.3378L12.9285 17.2158L22.684 4.32572C23.187 4.77755 23.6546 5.26805 24.0821 5.79253L26.1748 3.02736C26.5081 2.58698 26.4213 1.95979 25.9809 1.6265C25.5405 1.29321 24.9133 1.38003 24.5801 1.82041L22.684 4.32572C20.382 2.25799 17.3379 1 14 1Z"
			stroke="none"
		/>
	</svg>
)
export default Validators
