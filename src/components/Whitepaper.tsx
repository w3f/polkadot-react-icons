import * as React from 'react'
import { SVGProps } from 'react'
const Whitepaper = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={29}
		height={29}
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_0_2473)">
			<path
				d="M24.5549 8.24055V24.8551C24.5549 25.9596 23.6595 26.8551 22.5549 26.8551H6.9607C5.85613 26.8551 4.9607 25.9596 4.9607 24.8551V3.38257C4.9607 2.278 5.85613 1.38257 6.9607 1.38257H17.6969M24.5549 8.24055H19.6969C18.5924 8.24055 17.6969 7.34512 17.6969 6.24055V1.38257M24.5549 8.24055L17.6969 1.38257"
				stroke="black"
				strokeWidth={2.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_0_2473">
				<rect
					width={28}
					height={28}
					fill="white"
					transform="translate(0.757812 0.105469)"
				/>
			</clipPath>
		</defs>
	</svg>
)
export default Whitepaper
