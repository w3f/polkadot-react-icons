import * as React from 'react'
import { SVGProps } from 'react'
const AiAndComputing = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<circle
			cx={4}
			cy={12}
			r={2}
			transform="rotate(-180 4 12)"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M5.90002 12L9.90002 12" stroke="black" strokeWidth={2.5} />
		<circle cx={8} cy={4} r={2} stroke="black" strokeWidth={2.5} />
		<path d="M16 9H10V15H16V9Z" stroke="black" strokeWidth={2.5} />
		<path d="M10 4H13V9" stroke="black" strokeWidth={2.5} />
		<circle
			cx={18}
			cy={20}
			r={2}
			transform="rotate(-180 18 20)"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M16 20L13 20L13 15" stroke="black" strokeWidth={2.5} />
		<circle cx={22.4} cy={12} r={2} stroke="black" strokeWidth={2.5} />
		<path d="M20.5 12H16.5" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default AiAndComputing
