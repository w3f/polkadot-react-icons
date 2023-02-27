import * as React from 'react'
import { SVGProps } from 'react'
const Search = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M4 10.8609C4 5.4154 8.4143 1 13.8609 1C19.3075 1 23.7218 5.4154 23.7218 10.8609C23.7218 13.4707 22.708 15.8439 21.0525 17.6078L24.3016 23.2397C24.5776 23.718 24.4137 24.3293 23.9355 24.6054L19.8802 26.9471C19.6505 27.0797 19.3775 27.1157 19.1213 27.047C18.8651 26.9783 18.6467 26.8107 18.5141 26.581L15.0886 20.6462C14.6864 20.6961 14.2767 20.7218 13.8609 20.7218C8.41533 20.7218 4 16.3065 4 10.8609ZM17.1228 20.1696L19.7463 24.7149L22.0697 23.3733L19.5133 18.9421C18.7829 19.4539 17.9799 19.8693 17.1228 20.1696Z"
			stroke="none"
		/>
	</svg>
)
export default Search
