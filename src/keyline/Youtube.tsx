import * as React from 'react'
import { SVGProps } from 'react'
const Youtube = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={26}
		height={21}
		viewBox="0 0 26 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M24 1.39978H2V18.9998H24V1.39978Z" strokeMiterlimit={40} />
		<path
			d="M17.5631 10.1395L10.9631 6.28857V13.9886L17.5631 10.1395Z"
			fill="white"
		/>
	</svg>
)
export default Youtube
