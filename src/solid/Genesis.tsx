import * as React from 'react'
import { SVGProps } from 'react'
const Genesis = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1 0C0.447715 0 0 0.447715 0 1V19C0 19.5523 0.447715 20 1 20H18C18.5523 20 19 19.5523 19 19V11H25C25.5523 11 26 10.5523 26 10C26 9.44771 25.5523 9 25 9H19V1C19 0.447715 18.5523 0 18 0H1ZM19 9V11H11C10.4477 11 10 10.5523 10 10C10 9.44772 10.4477 9 11 9H19Z"
		/>
	</svg>
)
export default Genesis
