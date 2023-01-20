import * as React from 'react'
import { SVGProps } from 'react'
const Countdown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 20 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1.99414 0.125C1.44186 0.125 0.994141 0.572715 0.994141 1.125C0.99414 1.67728 1.44186 2.125 1.99414 2.125H2.99402L2.99402 7.365C2.99402 7.65014 3.11575 7.92173 3.3286 8.11147L8.95279 13.125L3.32868 18.1385C3.11583 18.3283 2.9941 18.5999 2.9941 18.885L2.9941 24.125H1.99408C1.44179 24.125 0.99408 24.5727 0.99408 25.125C0.99408 25.6773 1.44179 26.125 1.99408 26.125L3.9941 26.125L16.9172 26.125L18.9941 26.125C19.5464 26.125 19.9941 25.6773 19.9941 25.125C19.9941 24.5727 19.5464 24.125 18.9941 24.125H17.9172V18.885C17.9172 18.5999 17.7954 18.3283 17.5826 18.1385L11.9584 13.125L17.5825 8.11147C17.7954 7.92173 17.9171 7.65014 17.9171 7.365V2.125L18.9941 2.125C19.5464 2.125 19.9941 1.67729 19.9941 1.125C19.9941 0.572717 19.5464 0.125 18.9941 0.125L16.9171 0.125L3.99402 0.125L1.99414 0.125Z"
		/>
	</svg>
)
export default Countdown
