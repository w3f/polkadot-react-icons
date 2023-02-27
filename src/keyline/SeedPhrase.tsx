import * as React from 'react'
import { SVGProps } from 'react'
const SeedPhrase = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M2 14.2622L7.99997 14.2622" strokeMiterlimit={10} />
		<path d="M12 14.2622L21 14.2622" strokeMiterlimit={10} />
		<path d="M25 14.2622L26 14.2622" strokeMiterlimit={10} />
		<path d="M2 18.5244L6 18.5244" strokeMiterlimit={10} />
		<path d="M10 18.5244L12 18.5244" strokeMiterlimit={10} />
		<path d="M16 18.5244L26 18.5244" strokeMiterlimit={10} />
		<path d="M2 10L3.68974 10" strokeMiterlimit={10} />
		<path d="M21.6897 10L25.6897 10" strokeMiterlimit={10} />
		<path d="M7.68974 10L17.6897 10" strokeMiterlimit={10} />
	</svg>
)
export default SeedPhrase
