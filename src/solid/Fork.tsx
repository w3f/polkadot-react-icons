import * as React from 'react'
import { SVGProps } from 'react'
const Fork = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16 0H24C24.5523 0 25 0.447715 25 1V9C25 9.55228 24.5523 10 24 10H16C15.4477 10 15 9.55229 15 9V8.13584L10.836 11.0515L10.0169 11.6251L10 11.601V12.9514L10.8068 13.5163L15 16.4524V16C15 15.4477 15.4477 15 16 15H24C24.5523 15 25 15.4477 25 16V24C25 24.5523 24.5523 25 24 25H16C15.4477 25 15 24.5523 15 24V18.894L10 15.3929V16C10 16.5523 9.55228 17 9 17H1C0.447715 17 0 16.5523 0 16V8C0 7.44772 0.447715 7 1 7H9C9.55228 7 10 7.44772 10 8V9.19533L15 5.69429V1C15 0.447716 15.4477 0 16 0Z"
		/>
	</svg>
)
export default Fork
