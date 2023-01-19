import * as React from 'react'
import { SVGProps } from 'react'
const BuiltinSecurity = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M14.7512 23.3034L17.1782 26L22.7159 22.8122L21.6565 19.3836L22.0799 18.1124L25.9807 17.4421V10.8507L22.4848 10.0514L21.6854 8.66453L22.7929 5.23596L17.2648 2.04815L14.7994 4.69663H13.2295L10.8122 2L5.27448 5.1878L6.3435 8.67416L5.58266 10.0032L2 10.7544V17.1493L5.55377 17.9583L6.32424 19.2873L5.1878 22.764L10.7255 25.9615L13.1814 23.3034H14.7512Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M11.3487 12.7724V10.8404C11.3487 10.1384 11.6276 9.46519 12.124 8.96882C12.6203 8.47246 13.2935 8.1936 13.9955 8.1936C14.6957 8.19631 15.3663 8.47635 15.8604 8.97243C16.3546 9.4685 16.632 10.1402 16.632 10.8404V12.7724"
			stroke="black"
		/>
		<path d="M18.216 12.9864H9.77501V18.3106H18.216V12.9864Z" stroke="black" />
	</svg>
)
export default BuiltinSecurity
