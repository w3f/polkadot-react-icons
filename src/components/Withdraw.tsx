import * as React from 'react'
import { SVGProps } from 'react'
const Withdraw = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={29}
		height={29}
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_0_2467)">
			<path
				d="M22.8028 27.2791L5.08984 27.2791"
				stroke="black"
				strokeWidth={2.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.0826 2.56936L14.0826 23.1898M14.0826 2.56936L8.21936 8.42975M14.0826 2.56936L19.951 8.42791"
				stroke="black"
				strokeWidth={2.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_0_2467">
				<rect
					width={28}
					height={28}
					fill="white"
					transform="translate(0.0898438 0.569336)"
				/>
			</clipPath>
		</defs>
	</svg>
)
export default Withdraw
