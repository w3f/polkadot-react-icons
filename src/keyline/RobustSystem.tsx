import * as React from 'react'
import { SVGProps } from 'react'
const RobustSystem = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M12.1328 1.56837L3.73413 9.96704L9.95707 15.8913L11.4041 14.4607L18.2146 7.65016L12.1328 1.56837Z"
			stroke="black"
		/>
		<path d="M1.9223 20.1604V24.7046H19.712V20.1604H1.9223Z" stroke="black" />
	</svg>
)
export default RobustSystem
