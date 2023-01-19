import * as React from 'react'
import { SVGProps } from 'react'
const RemoteNode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M21.5521 6.40534L18.5262 2" stroke="black" strokeWidth={2.5} />
		<path
			d="M9.51626 2.0138L6.45081 6.39172"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M20.4718 8.60619C20.4718 10.1383 21.7138 11.3803 23.2459 11.3803C24.778 11.3803 26.02 10.1383 26.02 8.60619C26.02 7.07408 24.778 5.83206 23.2459 5.83206C21.7138 5.83206 20.4718 7.07408 20.4718 8.60619Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M2.00003 8.60619C2.00003 10.1383 3.24205 11.3803 4.77415 11.3803C6.30626 11.3803 7.54828 10.1383 7.54828 8.60619C7.54828 7.07408 6.30626 5.83206 4.77415 5.83206C3.24205 5.83206 2.00003 7.07408 2.00003 8.60619Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M11.3726 17.6644C12.8292 19.1209 15.1907 19.1209 16.6473 17.6644C18.1038 16.2078 18.1038 13.8463 16.6473 12.3898C15.1907 10.9332 12.8292 10.9332 11.3726 12.3898C9.9161 13.8463 9.9161 16.2078 11.3726 17.6644Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default RemoteNode
