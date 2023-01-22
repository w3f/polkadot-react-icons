import * as React from 'react'
import { SVGProps } from 'react'
const Hackathon = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M2.96952 21.1257L25.045 21.1257L25.045 3.33279L2.96952 3.3328L2.96952 21.1257Z" />
		<rect x={1.26221} y={21.1257} width={25.4756} height={3.87427} />
		<path d="M9.6314 14.8193L6.52344 12.232L9.6314 9.6394" />
		<path d="M18.3582 9.62899L21.4765 12.2268L18.3582 14.8193" />
		<path d="M15.7403 7.03906L12.2494 17.4194" />
	</svg>
)
export default Hackathon
