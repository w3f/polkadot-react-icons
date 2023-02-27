import * as React from 'react'
import { SVGProps } from 'react'
const Draw = (props: SVGProps<SVGSVGElement>) => (
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
			d="M18.7143 23L26 16.5714L17.7827 17.0116M4.14286 6.28571L17.4286 2L2 17.8571L7.15792 17.5808"
			fill="none"
			data-nofill="true"
		/>
		<path d="M18.8649 6.05542L23.6589 10.8494L11.1359 23.3723L4.82555 24.8887L6.342 18.5784L18.8649 6.05542Z" />
		<path d="M20.2346 14.2736L15.4407 9.47968M18.8649 6.05542L23.6589 10.8494L11.1359 23.3723L4.82555 24.8887L6.342 18.5784L18.8649 6.05542Z" />
	</svg>
)
export default Draw
