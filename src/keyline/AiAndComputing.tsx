import * as React from 'react'
import { SVGProps } from 'react'
const AiAndComputing = (props: SVGProps<SVGSVGElement>) => (
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
		<circle cx={5} cy={14} r={2} transform="rotate(-180 5 14)" />
		<path d="M6.90002 14L10.9 14" />
		<circle cx={9} cy={6} r={2} />
		<path d="M17 11H11V17H17V11Z" />
		<path d="M11 6H14V11" />
		<circle cx={19} cy={22} r={2} transform="rotate(-180 19 22)" />
		<path d="M17 22L14 22L14 17" />
		<circle cx={23.4} cy={14} r={2} />
		<path d="M21.5 14H17.5" />
	</svg>
)
export default AiAndComputing
