import * as React from 'react'
import { SVGProps } from 'react'
const SelectListItem = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M13.9824 25.9434C20.6098 25.9434 25.9824 20.5708 25.9824 13.9434C25.9824 7.31594 20.6098 1.94336 13.9824 1.94336C7.355 1.94336 1.98242 7.31594 1.98242 13.9434C1.98242 20.5708 7.355 25.9434 13.9824 25.9434Z" />
	</svg>
)
export default SelectListItem
