import * as React from 'react'
import { SVGProps } from 'react'
const Deposit = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={29}
		height={29}
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_0_2468)">
			<path
				d="M22.8165 27.2791L5.10352 27.2791"
				stroke="white"
				strokeWidth={2.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.1016 22.4529L14.1016 1.83252M14.1016 22.4529L19.9648 16.5925M14.1016 22.4529L8.23319 16.5944"
				stroke="white"
				strokeWidth={2.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_0_2468">
				<rect
					width={28}
					height={28}
					fill="white"
					transform="translate(0.103516 0.569336)"
				/>
			</clipPath>
		</defs>
	</svg>
)
export default Deposit
