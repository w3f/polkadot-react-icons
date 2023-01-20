import * as React from 'react'
import { SVGProps } from 'react'
const Version = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 23 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M12.4735 2.99275C9.47946 -0.126095 1.99424 1.49575 1.99424 1.49575L1.99424 13.5969C1.99424 13.5969 9.47946 11.975 12.4735 15.0939C15.4676 18.2127 21.4558 17.3394 21.4558 17.3394L21.4558 5.23832C21.4558 5.23832 15.4676 6.1116 12.4735 2.99275Z"
			stroke="black"
			strokeWidth={2}
		/>
		<path d="M1.99414 2.61865L1.99414 25.0743" stroke="black" strokeWidth={2} />
	</svg>
)
export default Version
