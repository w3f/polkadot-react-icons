import * as React from 'react'
import { SVGProps } from 'react'
const LayerOne = (props: SVGProps<SVGSVGElement>) => (
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
			d="M14.2635 7.11114C13.9802 6.9651 13.6442 6.96287 13.359 7.10514L2.55365 12.4948C2.21652 12.663 2.00252 13.0063 2.00002 13.3831C1.99753 13.7598 2.20697 14.106 2.54183 14.2786L13.7365 20.0489C14.0198 20.195 14.3558 20.1972 14.641 20.0549L25.4464 14.6652C25.7835 14.4971 25.9975 14.1537 26 13.777C26.0025 13.4003 25.793 13.0541 25.4582 12.8815L14.2635 7.11114Z"
			stroke="none"
		/>
	</svg>
)
export default LayerOne
