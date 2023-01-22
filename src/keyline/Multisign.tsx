import * as React from 'react'
import { SVGProps } from 'react'
const Multisign = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M9.3712 25.6559H1.28534" strokeMiterlimit={10} />
		<path d="M22.0711 12.9278L25.2854 16.1421L16.9642 24.4633L12.5532 25.6559L13.7499 21.249L22.0711 12.9278Z" />
		<path d="M22.0711 2L25.2854 5.21432L16.9642 13.5355L12.5532 14.7281L13.7499 10.3212L22.0711 2Z" />
		<path d="M9.3712 14.728H1.28534" strokeMiterlimit={10} />
	</svg>
)
export default Multisign
