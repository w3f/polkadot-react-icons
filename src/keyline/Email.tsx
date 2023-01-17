import * as React from 'react'
import { SVGProps } from 'react'
const Email = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={24}
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M26 2H2V22.219H26V2Z" />
		<path d="M3 3.31509L14 13.3151L25 3.31509" />
	</svg>
)
export default Email
