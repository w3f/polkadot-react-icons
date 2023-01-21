import * as React from 'react'
import { SVGProps } from 'react'
const Hackathon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M2.96952 19.1257L25.045 19.1257L25.045 1.33279L2.96952 1.3328L2.96952 19.1257Z" />
		<rect x={1.26221} y={19.1257} width={25.4756} height={3.87427} />
		<path d="M9.6314 12.8193L6.52344 10.232L9.6314 7.6394" />
		<path d="M18.3582 7.62899L21.4765 10.2268L18.3582 12.8193" />
		<path d="M15.7403 5.03906L12.2494 15.4194" />
	</svg>
)
export default Hackathon
