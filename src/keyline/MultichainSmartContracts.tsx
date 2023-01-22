import * as React from 'react'
import { SVGProps } from 'react'
const MultichainSmartContracts = (props: SVGProps<SVGSVGElement>) => (
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
		<rect x={2} y={2.56836} width={24} height={24} />
		<rect x={5.42859} y={17.9969} width={5.14286} height={5.14286} />
		<path d="M14 3.42554V25.7113" />
		<path d="M25.1429 14.5684L2.85717 14.5684" />
		<circle cx={20} cy={8.56838} r={2.57143} />
		<path d="M20 17.9969L17.4286 23.1398H20H22.5714L20 17.9969Z" />
		<path d="M8.00002 5.99695L5.42859 11.1398H8.00002H10.5714L8.00002 5.99695Z" />
	</svg>
)
export default MultichainSmartContracts
