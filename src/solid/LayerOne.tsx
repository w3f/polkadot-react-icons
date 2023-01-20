import * as React from 'react'
import { SVGProps } from 'react'
const LayerOne = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.2635 0.111136C11.9802 -0.0349044 11.6442 -0.0371301 11.359 0.105143L0.553646 5.49484C0.216525 5.663 0.00251766 6.00635 2.19501e-05 6.38307C-0.00247382 6.7598 0.206965 7.10595 0.54183 7.27856L11.7365 13.0489C12.0198 13.195 12.3558 13.1972 12.641 13.0549L23.4464 7.66521C23.7835 7.49705 23.9975 7.1537 24 6.77697C24.0025 6.40025 23.793 6.05409 23.4582 5.88149L12.2635 0.111136Z"
		/>
	</svg>
)
export default LayerOne
