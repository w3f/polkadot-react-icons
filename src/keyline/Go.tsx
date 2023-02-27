import * as React from 'react'
import { SVGProps } from 'react'
const Go = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M14 23C14 24.105 14.895 25 16 25C17.105 25 18 24.105 18 23V20H14V23Z" />
		<path d="M10 23C10 24.105 10.895 25 12 25C13.105 25 14 24.105 14 23V20H10V23Z" />
		<path d="M17.5 14H19C20.657 14 22 15.343 22 17C22 18.657 20.657 20 19 20H9C7.343 20 6 18.657 6 17C6 15.343 7.343 14 9 14H10.5" />
		<path d="M7.5 10C5.567 10 4 8.433 4 6.5C4 4.567 5.567 3 7.5 3C9.433 3 11 4.567 11 6.5C11 8.433 9.433 10 7.5 10Z" />
		<path d="M20.5 10C18.567 10 17 8.433 17 6.5C17 4.567 18.567 3 20.5 3C22.433 3 24 4.567 24 6.5C24 8.433 22.433 10 20.5 10Z" />
		<path d="M17 13C17 14.657 15.657 16 14 16C12.343 16 11 14.657 11 13C11 11.343 12.343 10 14 10C15.657 10 17 11.343 17 13Z" />
	</svg>
)
export default Go
