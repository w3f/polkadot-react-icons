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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M13.9824 0.943359C6.80272 0.943359 0.982422 6.76366 0.982422 13.9434C0.982422 21.1231 6.80272 26.9434 13.9824 26.9434C21.1621 26.9434 26.9824 21.1231 26.9824 13.9434C26.9824 6.76366 21.1621 0.943359 13.9824 0.943359Z"
		/>
	</svg>
)
export default SelectListItem
