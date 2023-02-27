import * as React from 'react'
import { SVGProps } from 'react'
const Youtube = (props: SVGProps<SVGSVGElement>) => (
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
			fillRule="evenodd"
			clipRule="evenodd"
			d="M2 5.3999C2 4.84762 2.44772 4.3999 3 4.3999H25C25.5523 4.3999 26 4.84762 26 5.3999V22.9999C26 23.5522 25.5523 23.9999 25 23.9999H3C2.44772 23.9999 2 23.5522 2 22.9999V5.3999ZM12.467 9.42485C12.1577 9.24439 11.7756 9.24307 11.4651 9.42141C11.1545 9.59974 10.9631 9.93049 10.9631 10.2886V17.9886C10.9631 18.3466 11.1545 18.6773 11.465 18.8557C11.7754 19.034 12.1576 19.0328 12.4669 18.8524L19.0669 15.0033C19.3741 14.8241 19.563 14.4953 19.5631 14.1396C19.5631 13.7839 19.3742 13.455 19.067 13.2758L12.467 9.42485ZM12.9631 16.2477V12.0298L16.5784 14.1393L12.9631 16.2477Z"
			stroke="none"
		/>
	</svg>
)
export default Youtube
