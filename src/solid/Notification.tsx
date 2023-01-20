import * as React from 'react'
import { SVGProps } from 'react'
const Notification = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M9.99317 0.813027C11.1015 0.819854 12 1.7239 12 2.83226V3.84527C15.3499 4.76063 17.8121 7.82571 17.8121 11.4659V21.9509H19.1233C19.6756 21.9509 20.1233 22.3986 20.1233 22.9509C20.1233 23.5032 19.6756 23.9509 19.1233 23.9509H12.0137V24.8061C12.0137 25.9145 11.1152 26.8075 10.0068 26.8006C8.89849 26.7938 8 25.8898 8 24.7814V23.9509H1C0.447715 23.9509 0 23.5032 0 22.9509C0 22.3986 0.447715 21.9509 1 21.9509H2.01355V11.4659C2.01355 7.76775 4.55483 4.66317 7.98633 3.80319V2.80754C7.98633 1.69917 8.88482 0.806201 9.99317 0.813027Z"
		/>
	</svg>
)
export default Notification
