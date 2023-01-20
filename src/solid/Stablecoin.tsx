import * as React from 'react'
import { SVGProps } from 'react'
const Stablecoin = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4ZM16 4C16 1.79086 17.7909 0 20 0C22.2091 0 24 1.79086 24 4C24 6.20914 22.2091 8 20 8C17.7909 8 16 6.20914 16 4ZM6.87079 17.75L10.7679 11H2C1.44771 11 1 10.5523 1 10C1 9.44771 1.44771 9 2 9H12.5H12.5276H22C22.5523 9 23 9.44771 23 10C23 10.5523 22.5523 11 22 11H14.2546L18.1304 17.7522C18.308 18.0616 18.3073 18.4423 18.1285 18.7511C17.9497 19.0599 17.6199 19.25 17.2631 19.25H7.73682C7.37955 19.25 7.04942 19.0594 6.87079 18.75C6.69216 18.4406 6.69216 18.0594 6.87079 17.75Z"
		/>
	</svg>
)
export default Stablecoin
