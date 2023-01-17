import * as React from 'react'
import { SVGProps } from 'react'
const Go = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={26}
		viewBox="0 0 24 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M12 22C12 23.105 12.895 24 14 24C15.105 24 16 23.105 16 22V19H12V22Z" />
		<path d="M8 22C8 23.105 8.895 24 10 24C11.105 24 12 23.105 12 22V19H8V22Z" />
		<path d="M15.5 13H17C18.657 13 20 14.343 20 16C20 17.657 18.657 19 17 19H7C5.343 19 4 17.657 4 16C4 14.343 5.343 13 7 13H8.5" />
		<path d="M5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5C9 7.433 7.433 9 5.5 9Z" />
		<path d="M18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5C22 7.433 20.433 9 18.5 9Z" />
		<path d="M15 12C15 13.657 13.657 15 12 15C10.343 15 9 13.657 9 12C9 10.343 10.343 9 12 9C13.657 9 15 10.343 15 12Z" />
	</svg>
)
export default Go
