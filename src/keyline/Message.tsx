import * as React from 'react'
import { SVGProps } from 'react'
const Message = (props: SVGProps<SVGSVGElement>) => (
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
		<g>
			<path d="M7.0197 19.8928V25.4819L14.3572 19.8928H26.7523V2.24902H1.25195V19.8928H7.0197Z" />
			<circle cx={7.5} cy={11.5} r={1.5} />
			<circle cx={13.5} cy={11.5} r={1.5} />
			<circle cx={19.5} cy={11.5} r={1.5} />
		</g>
	</svg>
)
export default Message
