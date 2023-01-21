import * as React from 'react'
import { SVGProps } from 'react'
const BlogPost = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path d="M22.8977 4.21835C23.8359 3.2802 25.3573 3.2802 26.2964 4.21835C27.2345 5.15651 27.2345 6.67794 26.2964 7.61704L19.1979 14.7155L14.5345 15.9764L15.7993 11.3177L22.8977 4.2193V4.21835Z" />
			<path d="M19.1978 14.7156L14.5344 15.9765L15.7991 11.3178L22.8975 4.21941C23.2515 3.86454 23.6884 3.64463 24.1462 3.5578V3H3V26.1962L11.651 21.2005H24.1462V9.76716L19.1978 14.7156Z" />
			<path d="M11.1708 15.9766H7.32574" />
			<path d="M16.8356 9.25095H6.98218" />
		</g>
	</svg>
)
export default BlogPost
