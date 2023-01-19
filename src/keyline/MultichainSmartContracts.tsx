import * as React from 'react'
import { SVGProps } from 'react'
const MultichainSmartContracts = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<rect x={2} y={1.56836} width={24} height={24} stroke="black" />
		<rect
			x={5.42859}
			y={16.9969}
			width={5.14286}
			height={5.14286}
			stroke="black"
		/>
		<path d="M14 2.42554V24.7113" stroke="black" />
		<path d="M25.1429 13.5684L2.85717 13.5684" stroke="black" />
		<circle cx={20} cy={7.56838} r={2.57143} stroke="black" />
		<path
			d="M20 16.9969L17.4286 22.1398H20H22.5714L20 16.9969Z"
			stroke="black"
		/>
		<path
			d="M8.00002 4.99695L5.42859 10.1398H8.00002H10.5714L8.00002 4.99695Z"
			stroke="black"
		/>
	</svg>
)
export default MultichainSmartContracts
