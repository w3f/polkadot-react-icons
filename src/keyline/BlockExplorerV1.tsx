import * as React from 'react'
import { SVGProps } from 'react'
const BlockExplorerV1 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<rect x={2} y={2} width={20} height={24} stroke="black" strokeWidth={2.5} />
		<path
			d="M17.4584 8.33936L9.92062 8.33936M6.43256 8.33936L6.42177 8.33936"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M17.4584 13.75L9.92062 13.75M6.43256 13.75L6.42177 13.75"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M17.4584 19.3394L9.92062 19.3394M6.43256 19.3394L6.42177 19.3394"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default BlockExplorerV1
