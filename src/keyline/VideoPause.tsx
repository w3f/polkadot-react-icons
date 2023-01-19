import * as React from 'react'
import { SVGProps } from 'react'
const VideoPause = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M13.9824 26.0742C20.6098 26.0742 25.9824 20.7016 25.9824 14.0742C25.9824 7.4468 20.6098 2.07422 13.9824 2.07422C7.355 2.07422 1.98242 7.4468 1.98242 14.0742C1.98242 20.7016 7.355 26.0742 13.9824 26.0742Z"
			stroke="black"
		/>
		<path d="M16.9384 18.3023L16.9385 10.1176" stroke="black" />
		<path d="M10.9824 10.0742V18.3023" stroke="black" />
	</svg>
)
export default VideoPause
