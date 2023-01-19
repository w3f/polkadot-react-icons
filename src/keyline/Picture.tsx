import * as React from 'react'
import { SVGProps } from 'react'
const Picture = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M26 2H2V22.7746H26V2Z" stroke="black" strokeMiterlimit={10} />
		<path
			d="M2.2439 12.463C13.6494 7.65216 13.6494 21.5082 25.6491 15.5254"
			stroke="black"
		/>
		<circle cx={19.4855} cy={9.0887} r={1.41774} stroke="black" />
	</svg>
)
export default Picture
