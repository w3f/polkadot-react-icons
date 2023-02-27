import * as React from 'react'
import { SVGProps } from 'react'
const Builders = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M8 7V6C8 3.791 9.791 2 12 2C14.209 2 16 3.791 16 6V7H8Z" />
		<path d="M18 7H6" />
		<path d="M16.458 15.565L15.222 15.227C14.383 14.997 14.066 13.975 14.627 13.311L15.467 12.317C16.761 10.786 16.862 8.638 15.849 7H8.14202C7.12902 8.637 7.23002 10.785 8.52402 12.317L9.36402 13.311C9.92502 13.975 9.60802 14.997 8.76902 15.227L7.53602 15.565C4.26602 16.461 1.99902 19.432 1.99902 22.823V26H22V22.828C22 19.435 19.731 16.461 16.458 15.565Z" />
	</svg>
)
export default Builders
