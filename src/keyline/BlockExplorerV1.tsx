import * as React from 'react'
import { SVGProps } from 'react'
const BlockExplorerV1 = (props: SVGProps<SVGSVGElement>) => (
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
		<rect x={4} y={2} width={20} height={24} />
		<path d="M19.4584 8.33936L11.9206 8.33936M8.43256 8.33936L8.42177 8.33936" />
		<path d="M19.4584 13.75L11.9206 13.75M8.43256 13.75L8.42177 13.75" />
		<path d="M19.4584 19.3394L11.9206 19.3394M8.43256 19.3394L8.42177 19.3394" />
	</svg>
)
export default BlockExplorerV1
