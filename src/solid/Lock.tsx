import * as React from 'react'
import { SVGProps } from 'react'
const Lock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M5.12134 6.41856C5.12134 2.87369 7.99503 0 11.5399 0C15.0848 0 17.9585 2.87369 17.9585 6.41858L17.9585 7.66943H22.0798C22.6321 7.66943 23.0798 8.11715 23.0798 8.66943V24.0002C23.0798 24.5525 22.6321 25.0002 22.0798 25.0002H1C0.447715 25.0002 0 24.5525 0 24.0002V8.66943C0 8.11715 0.447715 7.66943 1 7.66943H5.12133L5.12134 6.41857V6.41856ZM15.9585 7.66943H7.12133L7.12134 6.41858L6.12134 6.41857H7.12134C7.12134 3.97826 9.0996 2 11.5399 2C13.9802 2 15.9585 3.97826 15.9585 6.41857L15.9585 7.66943Z"
		/>
	</svg>
)
export default Lock
