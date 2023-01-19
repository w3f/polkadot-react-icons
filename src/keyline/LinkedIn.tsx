import * as React from 'react'
import { SVGProps } from 'react'
const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M26 2H2V26H26V2Z" stroke="black" strokeWidth={2.5} />
		<path
			d="M8.87454 10.8805L8.87996 20.1966M13.4787 20.1966L13.4787 14M19.9888 20.1966L19.9888 14.8649C19.9888 13.208 18.6456 11.8649 16.9888 11.8649L15.6138 11.8649C14.4346 11.8649 13.4787 12.8208 13.4787 14V14M13.4787 10.8805L13.4787 14"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M8.85718 7.14287L8.87837 7.16406"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default LinkedIn
