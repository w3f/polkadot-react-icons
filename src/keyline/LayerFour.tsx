import * as React from 'react'
import { SVGProps } from 'react'
const LayerFour = (props: SVGProps<SVGSVGElement>) => (
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
			d="M21.3014 19.285L25 21.1915L14.1947 26.5812L3 20.8108L6.90728 18.8619"
			strokeMiterlimit={10}
		/>
		<path
			d="M21.283 14.7928L25 16.7087L14.1947 22.0984L3 16.3281L6.71577 14.4747"
			strokeMiterlimit={10}
		/>
		<path
			d="M21.0712 10.2144L25 12.2396L14.1947 17.6293L3 11.8589L7.09859 9.81456"
			strokeMiterlimit={10}
		/>
		<path
			d="M25 7.77035L14.1947 13.16L3 7.3897L13.8053 2L25 7.77035Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default LayerFour
