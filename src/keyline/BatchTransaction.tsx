import * as React from 'react'
import { SVGProps } from 'react'
const BatchTransaction = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={28}
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M25.4728 16L15.4728 26" strokeMiterlimit={10} fill="none" />
		<path d="M12 2.61932L2 12.6193" strokeMiterlimit={10} fill="none" />
		<path d="M2.10724 26L25.5 2.60724" strokeMiterlimit={10} fill="none" />
		<path d="M20.4478 15.3989L25.9819 15.3807L26 20.9302" fill="none" />
		<path d="M6.97498 2.01823L12.5091 2L12.5272 7.54949" fill="none" />
		<path d="M20.4478 2.01823L25.9819 2L26 7.54949" fill="none" />
	</svg>
)
export default BatchTransaction
