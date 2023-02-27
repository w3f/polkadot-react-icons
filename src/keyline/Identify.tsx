import * as React from 'react'
import { SVGProps } from 'react'
const Identify = (props: SVGProps<SVGSVGElement>) => (
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
			d="M13.9,20.2c4.9,0,8.8-4,8.8-8.8c0-4.9-4-8.8-8.8-8.8C9,2.6,5,6.5,5,11.4C5,16.3,9,20.2,13.9,20.2z"
			strokeMiterlimit={10}
		/>
		<path
			d="M19.8,17.9c-1.2,1-2.6,1.8-4.2,2.1l3.8,6.5l4-2.3L19.8,17.9z"
			strokeMiterlimit={10}
		/>
		<path d="M20,17.6v-0.8c0-1.9-1.4-3.6-3.3-4.1L16,12.5c-0.5-0.1-0.7-0.7-0.4-1.1l0.5-0.6C17,9.7,17,8.3,16,7.3 c-1.1-1-2.8-1-3.9,0c-1,0.9-1.1,2.4-0.2,3.4l0.5,0.6c0.3,0.4,0.1,1-0.4,1.1l-0.7,0.2c-2,0.5-3.3,2.2-3.3,4.1v0.8" />
	</svg>
)
export default Identify
