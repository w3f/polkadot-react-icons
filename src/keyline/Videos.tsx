import * as React from 'react'
import { SVGProps } from 'react'
const Videos = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			d="M21.8623 19.4786H26.0002V2H6.13812V5.72414"
			stroke="black"
			strokeMiterlimit={40}
		/>
		<path
			d="M21.8621 6.13794H2V23.6166H21.8621V6.13794Z"
			stroke="black"
			strokeMiterlimit={40}
		/>
		<path
			d="M15.5063 16.467L10.7394 13.2883V19.6442L15.5063 16.467Z"
			stroke="black"
		/>
		<path d="M2 10.1104H21.8621" stroke="black" />
		<path d="M4.6192 6.77124L7.5 9.99994" stroke="black" />
		<path d="M16.1174 6.74927L19 9.63179" stroke="black" />
		<path d="M10.5771 6.77014L13.3915 9.58457" stroke="black" />
	</svg>
)
export default Videos
