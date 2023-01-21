import * as React from 'react'
import { SVGProps } from 'react'
const Sign = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M9.74995 14.9047H2" strokeMiterlimit={10} />
		<path d="M22.741 2L26 5.25894L17.5632 13.6957L13.091 14.9048L14.3043 10.4367L22.741 2Z" />
	</svg>
)
export default Sign
