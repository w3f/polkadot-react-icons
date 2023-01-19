import * as React from 'react'
import { SVGProps } from 'react'
const Filter = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 22"
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
			d="M18.5 1.68166C18.5 1.12937 18.0523 0.68166 17.5 0.68166C16.9477 0.68166 16.5 1.12937 16.5 1.68166V3.0388H1C0.447715 3.0388 0 3.48652 0 4.0388C0 4.59109 0.447715 5.0388 1 5.0388H16.5V6.39595C16.5 6.94823 16.9477 7.39595 17.5 7.39595C18.0523 7.39595 18.5 6.94823 18.5 6.39595V5.0388H23C23.5523 5.0388 24 4.59109 24 4.0388C24 3.48652 23.5523 3.0388 23 3.0388H18.5V1.68166ZM0 11.1102C0 10.5579 0.447715 10.1102 1 10.1102H4.71429V8.75304C4.71429 8.20076 5.162 7.75304 5.71429 7.75304C6.26657 7.75304 6.71429 8.20076 6.71429 8.75304V10.1102H23C23.5523 10.1102 24 10.5579 24 11.1102C24 11.6625 23.5523 12.1102 23 12.1102H6.71429V13.4673C6.71429 14.0196 6.26657 14.4673 5.71429 14.4673C5.162 14.4673 4.71429 14.0196 4.71429 13.4673V12.1102H1C0.447715 12.1102 0 11.6625 0 11.1102ZM0 18.4435C0 17.8912 0.447715 17.4435 1 17.4435H11V15.8245C11 15.2722 11.4477 14.8245 12 14.8245C12.5523 14.8245 13 15.2722 13 15.8245V17.4435H23C23.5523 17.4435 24 17.8912 24 18.4435C24 18.9958 23.5523 19.4435 23 19.4435H13V20.5388C13 21.0911 12.5523 21.5388 12 21.5388C11.4477 21.5388 11 21.0911 11 20.5388V19.4435H1C0.447715 19.4435 0 18.9958 0 18.4435Z"
		/>
	</svg>
)
export default Filter
