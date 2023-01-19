import * as React from 'react'
import { SVGProps } from 'react'
const Stablecoin = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 19"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4ZM24 4C24 6.20914 22.2091 8 20 8C17.7909 8 16 6.20914 16 4C16 1.79086 17.7909 0 20 0C22.2091 0 24 1.79086 24 4ZM22.8721 10.2236C22.8721 10.7759 22.4244 11.2236 21.8721 11.2236H13.3612L17.0979 17.4877C17.4955 18.1543 17.0152 19 16.2391 19H7.76619C6.9889 19 6.50878 18.152 6.9087 17.4855L10.6658 11.2236H1.87207C1.31978 11.2236 0.87207 10.7759 0.87207 10.2236C0.87207 9.67135 1.31978 9.22363 1.87207 9.22363H21.8721C22.4244 9.22363 22.8721 9.67135 22.8721 10.2236Z"
		/>
	</svg>
)
export default Stablecoin
