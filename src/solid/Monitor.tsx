import * as React from 'react'
import { SVGProps } from 'react'
const Monitor = (props: SVGProps<SVGSVGElement>) => (
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
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1 2.5C1 1.94772 1.44772 1.5 2 1.5H26C26.5523 1.5 27 1.94772 27 2.5V15.5029H1V2.5ZM1 17.5029V20.5C1 21.0523 1.44772 21.5 2 21.5H13V24H10C9.44771 24 9 24.4477 9 25C9 25.5523 9.44771 26 10 26H18C18.5523 26 19 25.5523 19 25C19 24.4477 18.5523 24 18 24H15V21.5H26C26.5523 21.5 27 21.0523 27 20.5V17.5029H1Z"
			stroke="none"
		/>
	</svg>
)
export default Monitor
