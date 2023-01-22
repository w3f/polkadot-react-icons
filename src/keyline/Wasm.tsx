import * as React from 'react'
import { SVGProps } from 'react'
const Wasm = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			d="M17.763 3.99976C17.763 6.08502 16.1319 7.85576 14 7.85576C11.9242 7.85576 10.1625 6.0858 10.237 3.99976H4V23.9998H24V3.99976H17.763Z"
			stroke="#010101"
		/>
		<path d="M10 12.9998L11.3333 19.3603H11.4172L14 12.9998H14.0651L16.6667 19.3603H16.7194L18 12.9998" />
	</svg>
)
export default Wasm
