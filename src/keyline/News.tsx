import * as React from 'react'
import { SVGProps } from 'react'
const News = (props: SVGProps<SVGSVGElement>) => (
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
			d="M19.9104 22.567C19.9104 24.8828 21.2555 25.8828 22.9122 25.8828C24.5689 25.8828 25.9104 24.3986 25.9104 22.567L25.9104 5.8388L19.9104 5.8388"
			stroke="black"
		/>
		<path
			d="M19.9104 1.88281H1.9104V25.8828H23.0099C20.8154 25.8828 19.9095 24.4486 19.9095 22.5708L19.9104 1.88281Z"
			stroke="black"
		/>
		<path d="M6.28784 20.8828H15.2878" stroke="black" strokeMiterlimit={10} />
		<path
			d="M6.28784 15.8828L15.2878 15.8828"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<rect
			x={6.28784}
			y={5.88281}
			width={9}
			height={5}
			fill="white"
			stroke="black"
		/>
	</svg>
)
export default News
