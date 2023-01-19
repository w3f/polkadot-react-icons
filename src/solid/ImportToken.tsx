import * as React from 'react'
import { SVGProps } from 'react'
const ImportToken = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 19"
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
			d="M15.9291 10.3333H10V12.3333H15.3264C15.6217 11.7115 15.8281 11.0394 15.9291 10.3333ZM13.899 14.3333H10V16.2624C11.5081 16.0466 12.8612 15.3502 13.899 14.3333ZM15.9291 8.33325H10V6.3335H15.3265C15.6218 6.95513 15.8281 7.6272 15.9291 8.33325ZM10 2.40414V4.3335H13.8992C12.8614 3.31641 11.5083 2.61988 10 2.40414ZM9 18.3333C4.02944 18.3333 0 14.3038 0 9.33325C0 4.36269 4.02944 0.333252 9 0.333252H25C25.5523 0.333252 26 0.780967 26 1.33325V17.3333C26 17.8855 25.5523 18.3333 25 18.3333H9ZM8 2.40414C4.60771 2.88937 2 5.80678 2 9.33325C2 12.8597 4.60771 15.7771 8 16.2624V2.40414Z"
		/>
	</svg>
)
export default ImportToken
