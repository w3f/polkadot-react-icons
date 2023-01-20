import * as React from 'react'
import { SVGProps } from 'react'
const Overview = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M13.578 0.184098C13.2317 -0.0612031 12.7683 -0.0612031 12.422 0.184098L0.421983 8.6841C0.157308 8.87158 0 9.17578 0 9.50012V25.0001C0 25.5524 0.447715 26.0001 1 26.0001H10.5C11.0523 26.0001 11.5 25.5524 11.5 25.0001V17.5001H15V25.0001C15 25.5524 15.4477 26.0001 16 26.0001H25C25.5523 26.0001 26 25.5524 26 25.0001V9.50012C26 9.17578 25.8427 8.87158 25.578 8.6841L13.578 0.184098Z"
		/>
	</svg>
)
export default Overview
