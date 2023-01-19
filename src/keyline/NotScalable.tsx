import * as React from 'react'
import { SVGProps } from 'react'
const NotScalable = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M13.9809 22.0069C18.4058 22.0069 21.9929 18.4198 21.9929 13.9949C21.9929 9.57006 18.4058 5.98297 13.9809 5.98297C9.55603 5.98297 5.96894 9.57006 5.96894 13.9949C5.96894 18.4198 9.55603 22.0069 13.9809 22.0069Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path d="M16.0572 15.8242L12.0581 11.8251" stroke="black" fill="none" />
		<path d="M16.0572 11.8251L12.0581 15.8242" stroke="black" fill="none" />
		<path
			d="M20.857 2.01674L25.9632 2L25.98 7.09755"
			stroke="black"
			fill="none"
		/>
		<path
			d="M25.478 2.67471L19.708 8.36659"
			stroke="black"
			strokeMiterlimit={10}
			fill="none"
		/>
		<path
			d="M7.12301 2.01674L2.0168 2L2.00003 7.09755"
			stroke="black"
			fill="none"
		/>
		<path
			d="M2.50202 2.67471L8.28687 8.36681"
			stroke="black"
			strokeMiterlimit={10}
			fill="none"
		/>
		<path d="M2.01674 20.877L2 25.9832L7.09755 26" stroke="black" fill="none" />
		<path
			d="M2.67472 25.4979L8.38563 19.7086"
			stroke="black"
			strokeMiterlimit={10}
			fill="none"
		/>
		<path
			d="M25.9635 20.877L25.9802 25.9832L20.8827 26"
			stroke="black"
			fill="none"
		/>
		<path
			d="M25.3055 25.498L19.5948 19.709"
			stroke="black"
			strokeMiterlimit={10}
			fill="none"
		/>
	</svg>
)
export default NotScalable
