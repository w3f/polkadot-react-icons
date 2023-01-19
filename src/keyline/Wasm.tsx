import * as React from 'react'
import { SVGProps } from 'react'
const Wasm = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M15.763 1.99976C15.763 4.08502 14.1319 5.85576 12 5.85576C9.92422 5.85576 8.1625 4.0858 8.237 1.99976H2V21.9998H22V1.99976H15.763Z"
			stroke="#010101"
		/>
		<path
			d="M8 10.9998L9.33333 17.3603H9.41723L12 10.9998H12.0651L14.6667 17.3603H14.7194L16 10.9998"
			stroke="black"
		/>
	</svg>
)
export default Wasm
