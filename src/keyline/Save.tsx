import * as React from 'react'
import { SVGProps } from 'react'
const Save = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M26 9.31446L26 25.9434L2 25.9434L2 1.94336L18.3436 1.94336L26 9.31446Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path d="M10.5714 2.5V10.5148H2.5" stroke="black" strokeMiterlimit={10} />
		<path
			d="M16.4643 17.0862C16.4643 18.605 15.2331 19.8362 13.7143 19.8362C12.1955 19.8362 10.9643 18.605 10.9643 17.0862C10.9643 15.5675 12.1955 14.3362 13.7143 14.3362C15.2331 14.3362 16.4643 15.5675 16.4643 17.0862Z"
			stroke="black"
		/>
	</svg>
)
export default Save
