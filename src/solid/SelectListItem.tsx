import * as React from 'react'
import { SVGProps } from 'react'
const SelectListItem = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M13.0684 26.1367C20.2858 26.1367 26.1367 20.2858 26.1367 13.0684C26.1367 5.8509 20.2858 0 13.0684 0C5.8509 0 0 5.8509 0 13.0684C0 20.2858 5.8509 26.1367 13.0684 26.1367Z" />
	</svg>
)
export default SelectListItem
