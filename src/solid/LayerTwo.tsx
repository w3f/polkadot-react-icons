import * as React from 'react'
import { SVGProps } from 'react'
const LayerTwo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.2635 0.111136C11.9802 -0.0349044 11.6442 -0.0371301 11.359 0.105143L0.553646 5.49484C0.216525 5.663 0.00251766 6.00635 2.19501e-05 6.38307C-0.00247382 6.7598 0.206965 7.10595 0.54183 7.27856L3.19519 8.64625L0.553646 9.96385C0.216525 10.132 0.00251765 10.4754 2.1948e-05 10.8521C-0.0024737 11.2288 0.206965 11.575 0.54183 11.7476L11.7365 17.5179C12.0198 17.664 12.3558 17.6662 12.641 17.5239L23.4464 12.1342C23.7835 11.9661 23.9975 11.6227 24 11.246C24.0025 10.8693 23.793 10.5231 23.4582 10.3505L20.8048 8.9828L23.4464 7.66521C23.7835 7.49705 23.9975 7.1537 24 6.77697C24.0025 6.40025 23.793 6.05409 23.4582 5.88149L12.2635 0.111136ZM5.39877 9.7821L11.7365 13.0489C12.0198 13.195 12.3558 13.1972 12.641 13.0549L18.5864 10.0894L20.789 11.2247L12.2021 15.5078L3.21101 10.8734L5.39877 9.7821Z"
		/>
	</svg>
)
export default LayerTwo
