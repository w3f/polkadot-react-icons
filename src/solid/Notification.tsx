import * as React from 'react'
import { SVGProps } from 'react'
const Notification = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
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
			d="M13.9932 1.81303C15.1015 1.81985 16 2.7239 16 3.83226V4.84527C19.3499 5.76063 21.8121 8.82571 21.8121 12.4659V22.9509H23.1233C23.6756 22.9509 24.1233 23.3986 24.1233 23.9509C24.1233 24.5032 23.6756 24.9509 23.1233 24.9509H16.0137V25.8061C16.0137 26.9145 15.1152 27.8075 14.0068 27.8006C12.8985 27.7938 12 26.8898 12 25.7814V24.9509H5C4.44772 24.9509 4 24.5032 4 23.9509C4 23.3986 4.44772 22.9509 5 22.9509H6.01355V12.4659C6.01355 8.76775 8.55483 5.66317 11.9863 4.80319V3.80754C11.9863 2.69917 12.8848 1.8062 13.9932 1.81303Z"
			stroke="none"
		/>
	</svg>
)
export default Notification
