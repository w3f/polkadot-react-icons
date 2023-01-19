import * as React from 'react'
import { SVGProps } from 'react'
const SeedPhrase = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M2 6.26221L7.99997 6.26221" stroke="black" strokeMiterlimit={10} />
		<path d="M12 6.26221L21 6.26221" stroke="black" strokeMiterlimit={10} />
		<path d="M25 6.26221L26 6.26221" stroke="black" strokeMiterlimit={10} />
		<path d="M2 10.5244L6 10.5244" stroke="black" strokeMiterlimit={10} />
		<path d="M10 10.5244L12 10.5244" stroke="black" strokeMiterlimit={10} />
		<path d="M16 10.5244L26 10.5244" stroke="black" strokeMiterlimit={10} />
		<path d="M2 2L3.68974 2" stroke="black" strokeMiterlimit={10} />
		<path d="M21.6897 2L25.6897 2" stroke="black" strokeMiterlimit={10} />
		<path d="M7.68974 2.00002L17.6897 2" stroke="black" strokeMiterlimit={10} />
	</svg>
)
export default SeedPhrase
