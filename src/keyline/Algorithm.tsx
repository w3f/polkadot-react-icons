import * as React from 'react'
import { SVGProps } from 'react'
const Algorithm = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M18.9557 22.7289H15.2495V5.42358H19.0515"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path d="M11.9375 13.9775H14.9584" stroke="black" strokeWidth={2.5} />
		<path
			d="M26.7702 1.56445H19.0513V9.28338H26.7702V1.56445Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M11.9378 13.9775L6.86572 8.9054L1.79361 13.9775L6.86572 19.0496L11.9378 13.9775Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M22.9107 26.4355C25.0423 26.4355 26.7702 24.7075 26.7702 22.576C26.7702 20.4445 25.0423 18.7166 22.9107 18.7166C20.7792 18.7166 19.0513 20.4445 19.0513 22.576C19.0513 24.7075 20.7792 26.4355 22.9107 26.4355Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Algorithm
