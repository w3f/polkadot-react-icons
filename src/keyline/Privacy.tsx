import * as React from 'react'
import { SVGProps } from 'react'
const Privacy = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			d="M2 5.71352V14.057C2 17.4564 3.7269 20.6229 6.58467 22.4638L12.0743 26L17.7036 22.3721C20.5604 20.531 22.2865 17.3651 22.2865 13.9665V5.71352L12.1386 2L2 5.71352Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M8.6684 13.882L11.695 17.2419L17.2419 10.5736"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Privacy
