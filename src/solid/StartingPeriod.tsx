import * as React from 'react'
import { SVGProps } from 'react'
const StartingPeriod = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13ZM14.0001 4.96477C14.0001 4.41248 13.5524 3.96477 13.0001 3.96478C12.4478 3.96478 12.0001 4.41251 12.0001 4.96479L12.0002 13.093C12.0002 13.6452 12.448 14.0929 13.0002 14.0929C13.5525 14.0929 14.0002 13.6452 14.0002 13.0929L14.0001 4.96477Z"
		/>
	</svg>
)
export default StartingPeriod
