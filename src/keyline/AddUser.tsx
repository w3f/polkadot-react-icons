import * as React from 'react'
import { SVGProps } from 'react'
const AddUser = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M22.9991 8.00464V2.00464" stroke="black" />
		<path d="M25.9991 5.00464L19.9991 5.00464" stroke="black" />
		<path
			d="M9.54966 12.747L8.64035 11.6538C7.08843 9.78802 7.21272 7.04735 8.92716 5.32973C10.7628 3.49069 13.7426 3.49069 15.5782 5.32973C17.2926 7.04735 17.4169 9.78802 15.865 11.6538L14.9559 12.7467C14.3751 13.4449 14.7079 14.5097 15.5828 14.7531L16.8145 15.0956C20.187 16.0335 22.5206 19.1046 22.5206 22.6051V25.9816H1.99304V22.5992C1.99304 19.1017 4.32433 16.0331 7.69379 15.0954L8.92292 14.7533C9.79775 14.5099 10.1304 13.4451 9.54966 12.747Z"
			stroke="black"
		/>
	</svg>
)
export default AddUser
