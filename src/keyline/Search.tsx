import * as React from 'react'
import { SVGProps } from 'react'
const Search = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M10.8551 19.6652C15.7493 19.6652 19.716 15.6976 19.716 10.8043C19.716 5.91098 15.7493 1.94336 10.8551 1.94336C5.9608 1.94336 1.99414 5.91098 1.99414 10.8043C1.99414 15.6976 5.96176 19.6652 10.8551 19.6652Z"
			strokeMiterlimit={10}
		/>
		<path
			d="M16.7885 17.3718C15.6288 18.4208 14.1964 19.1721 12.6032 19.491L16.3743 26.0247L20.4296 23.683L16.7885 17.3718Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Search
