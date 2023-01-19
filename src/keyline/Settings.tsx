import * as React from 'react'
import { SVGProps } from 'react'
const Settings = (props: SVGProps<SVGSVGElement>) => (
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
			d="M14 18C16.2091 18 18 16.2091 18 14C18 11.7909 16.2091 10 14 10C11.7909 10 10 11.7909 10 14C10 16.2091 11.7909 18 14 18Z"
			stroke="black"
		/>
	</svg>
)
export default Settings
