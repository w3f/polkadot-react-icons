import * as React from 'react'
import { SVGProps } from 'react'
const LimitedSupply = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={29}
		height={29}
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_0_1950)">
			<path
				d="M4.31055 27.2999H24.3105V9.31911H4.31055V27.2999Z"
				stroke="black"
				strokeWidth={2.5}
				strokeLinejoin="round"
			/>
			<path
				d="M1.58398 9.31249H27.0663V4.52209H1.58398V9.31249Z"
				stroke="black"
				strokeWidth={2.5}
				strokeLinejoin="round"
			/>
			<path
				d="M8.08008 22.4559L12.2502 18.6151L14.1181 20.483L19.6869 14.5834"
				stroke="black"
				strokeWidth={2.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.3447 14.2635L20.0067 14.2482L20.022 18.9022"
				stroke="black"
				strokeWidth={2.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_0_1950">
				<rect
					width={28}
					height={28}
					fill="white"
					transform="translate(0.325195 0.557617)"
				/>
			</clipPath>
		</defs>
	</svg>
)
export default LimitedSupply
