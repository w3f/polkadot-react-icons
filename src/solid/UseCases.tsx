import * as React from 'react'
import { SVGProps } from 'react'
const UseCases = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 23"
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
			d="M5.62515 2C5.62515 1.30964 6.1848 0.75 6.87515 0.75H26C26.6903 0.75 27.25 1.30964 27.25 2V21.1248C27.25 21.8152 26.6903 22.3748 26 22.3748H6.87515C6.1848 22.3748 5.62515 21.8152 5.62515 21.1248V12.8125H17.935L15.553 15.1986C15.0652 15.6871 15.0659 16.4786 15.5544 16.9663C16.043 17.4541 16.8345 17.4534 17.3222 16.9648L21.8377 12.4418C22.3251 11.9535 22.3248 11.1627 21.8369 10.6748L17.3215 6.15933C16.8333 5.67117 16.0418 5.67117 15.5537 6.15933C15.0655 6.64748 15.0655 7.43894 15.5537 7.9271L17.9391 10.3125H5.62515V2Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M5.62515 10.3125V12.8125L2 12.8125C1.30964 12.8125 0.75 12.2529 0.75 11.5625C0.75 10.8721 1.30964 10.3125 2 10.3125H5.62515Z"
			fill="black"
		/>
	</svg>
)
export default UseCases
