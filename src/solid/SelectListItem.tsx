import * as React from 'react'
import { SVGProps } from 'react'
const SelectListItem = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
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
			d="M14.9824 1.94336C7.80272 1.94336 1.98242 7.76366 1.98242 14.9434C1.98242 22.1231 7.80272 27.9434 14.9824 27.9434C22.1621 27.9434 27.9824 22.1231 27.9824 14.9434C27.9824 7.76366 22.1621 1.94336 14.9824 1.94336Z"
			stroke="none"
		/>
	</svg>
)
export default SelectListItem
