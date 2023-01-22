import * as React from 'react'
import { SVGProps } from 'react'
const Videos = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			d="M21.8623 20.4786H26.0002V3H6.13812V6.72414"
			strokeMiterlimit={40}
		/>
		<path
			d="M21.8621 7.13794H2V24.6166H21.8621V7.13794Z"
			strokeMiterlimit={40}
		/>
		<path d="M15.5063 17.467L10.7394 14.2883V20.6442L15.5063 17.467Z" />
		<path d="M2 11.1104H21.8621" />
		<path d="M4.6192 7.77124L7.5 10.9999" />
		<path d="M16.1174 7.74927L19 10.6318" />
		<path d="M10.5771 7.77014L13.3915 10.5846" />
	</svg>
)
export default Videos
