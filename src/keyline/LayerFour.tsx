import * as React from 'react'
import { SVGProps } from 'react'
const LayerFour = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M20.3014 19.285L24 21.1915L13.1947 26.5812L2 20.8108L5.90728 18.8619"
			strokeMiterlimit={10}
		/>
		<path
			d="M20.283 14.7928L24 16.7087L13.1947 22.0984L2 16.3281L5.71577 14.4747"
			strokeMiterlimit={10}
		/>
		<path
			d="M20.0712 10.2144L24 12.2396L13.1947 17.6293L2 11.8589L6.09859 9.81456"
			strokeMiterlimit={10}
		/>
		<path
			d="M24 7.77035L13.1947 13.16L2 7.3897L12.8053 2L24 7.77035Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default LayerFour
