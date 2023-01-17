import * as React from 'react'
import { SVGProps } from 'react'
const Picture = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={25}
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M26 2H2V22.7746H26V2Z" strokeMiterlimit={10} />
		<path d="M2.2439 12.463C13.6494 7.65216 13.6494 21.5082 25.6491 15.5254" />
		<circle cx={19.4855} cy={9.0887} r={1.41774} />
	</svg>
)
export default Picture
