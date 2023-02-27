import * as React from 'react'
import { SVGProps } from 'react'
const Bridge = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M24.9986 20.3965L25 8.39652L3 8.39648L3.00008 20.3965L5.75 20.3965C5.75 20.3965 8.57808 16.3182 14.039 16.3182C19.5 16.3182 22.25 20.3965 22.25 20.3965L24.9986 20.3965Z" />
	</svg>
)
export default Bridge
