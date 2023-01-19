import * as React from 'react'
import { SVGProps } from 'react'
const Documentations = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M18.5 23H24.3781V7.65385L18.7242 2H8.2242V5"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M23.5 7.65386H18.7242V3" stroke="black" strokeWidth={2.5} />
		<path
			d="M1.99995 26V4.99998H12.5L18.1538 10.6538V26H1.99995Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M14.8128 21.1899H5.13055"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M14.8128 17.9622H5.13055"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path d="M17.5 10.6538H12.5V6" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default Documentations
