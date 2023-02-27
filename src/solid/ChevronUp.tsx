import * as React from 'react'
import { SVGProps } from 'react'
const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
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
			d="M2.3537 21.8939C1.93227 21.537 1.88 20.9059 2.23695 20.4845L13.248 7.48452C13.4381 7.26006 13.7174 7.13069 14.0115 7.13084C14.3057 7.13098 14.5849 7.26063 14.7748 7.48527L25.7637 20.4853C26.1203 20.9071 26.0674 21.538 25.6456 21.8945C25.2238 22.2511 24.5928 22.1982 24.2363 21.7764L14.0103 9.67896L3.76309 21.7772C3.40614 22.1986 2.77513 22.2509 2.3537 21.8939Z"
			stroke="none"
		/>
	</svg>
)
export default ChevronUp
