import * as React from 'react'
import { SVGProps } from 'react'
const Wallet = (props: SVGProps<SVGSVGElement>) => (
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
		<g>
			<path d="M26.7599 3.24988H1.23975V24.7496H26.7599V3.24988Z" />
			<path d="M26.7742 8.98047H17.7689C14.9968 8.98047 12.7495 11.2277 12.7495 13.9999C12.7495 16.772 14.9968 19.0192 17.7689 19.0192H26.7742V8.98047Z" />
			<circle cx={18} cy={14} r={1} />
		</g>
	</svg>
)
export default Wallet
