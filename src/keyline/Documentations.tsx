import * as React from 'react'
import { SVGProps } from 'react'
const Documentations = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M19.5 23H25.3781V7.65385L19.7242 2H9.2242V5" />
		<path d="M24.5 7.65386H19.7242V3" />
		<path d="M2.99995 26V4.99998H13.5L19.1538 10.6538V26H2.99995Z" />
		<path d="M15.8128 21.1899H6.13055" strokeMiterlimit={10} />
		<path d="M15.8128 17.9622H6.13055" strokeMiterlimit={10} />
		<path d="M18.5 10.6538H13.5V6" />
	</svg>
)
export default Documentations
