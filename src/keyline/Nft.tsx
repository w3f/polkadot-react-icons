import * as React from 'react'
import { SVGProps } from 'react'
const Nft = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M2.03345 20.7869L13.6488 26.5946L25.2642 20.7869V7.23566L13.6488 1.42798L2.03345 7.23566V20.7869Z" />
		<path d="M6.14062 16.9801V11.0425H6.17163L9.62476 16.9801H9.65493V11.0424" />
		<path d="M20.376 16.9999V11.2902" />
		<path d="M21.8601 11.0221L18.8916 11.0221" />
		<path d="M13.3555 16.9977V11.0005H15.1913" />
		<path d="M15.1917 14.2847L13.3555 14.2847" />
	</svg>
)
export default Nft
