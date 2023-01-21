import * as React from 'react'
import { SVGProps } from 'react'
const Wallet = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M26.7599 1.24988H1.23975V22.7496H26.7599V1.24988Z" />
		<path d="M26.7742 6.98047H17.7689C14.9968 6.98047 12.7495 9.22773 12.7495 11.9999C12.7495 14.772 14.9968 17.0192 17.7689 17.0192H26.7742V6.98047Z" />
		<circle cx={18} cy={12} r={1} />
	</svg>
)
export default Wallet
