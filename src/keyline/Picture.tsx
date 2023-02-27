import * as React from 'react'
import { SVGProps } from 'react'
const Picture = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M26 4H2V24.7746H26V4Z" strokeMiterlimit={10} />
		<path d="M2.2439 14.463C13.6494 9.65216 13.6494 23.5082 25.6491 17.5254" />
		<circle cx={19.4855} cy={11.0887} r={1.41774} />
	</svg>
)
export default Picture
