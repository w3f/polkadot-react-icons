import * as React from 'react'
import { SVGProps } from 'react'
const Genesis = (props: SVGProps<SVGSVGElement>) => (
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
		<rect x={2} y={5} width={17} height={18} />
		<path d="M26 14L12 14" />
	</svg>
)
export default Genesis
