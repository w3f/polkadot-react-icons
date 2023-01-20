import * as React from 'react'
import { SVGProps } from 'react'
const Indeterminate = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.994141 1.67578C0.994141 1.1235 1.44186 0.675781 1.99414 0.675781H25.9941C26.5464 0.675781 26.9941 1.1235 26.9941 1.67578V25.6758C26.9941 26.2281 26.5464 26.6758 25.9941 26.6758H1.99414C1.44186 26.6758 0.994141 26.2281 0.994141 25.6758V1.67578ZM8.84576 14.6997C8.29348 14.6967 7.84819 14.2466 7.85118 13.6943C7.85416 13.142 8.30429 12.6967 8.85657 12.6997L19.2461 12.7559C19.7984 12.7589 20.2437 13.209 20.2407 13.7613C20.2377 14.3136 19.7876 14.7588 19.2353 14.7559L8.84576 14.6997Z"
		/>
	</svg>
)
export default Indeterminate
