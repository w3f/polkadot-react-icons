import * as React from 'react'
import { SVGProps } from 'react'
const Dapps = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path d="M14 4L6 4" />
			<path d="M17.5976 5.5976L22.5161 10.5161" />
			<path d="M4 17L4 6" />
			<path d="M24 14L24 22" />
			<path d="M12.5837 12.5837L5.84314 5.84314" />
			<path d="M22.5171 22.5168L15.426 15.4258" />
			<path d="M16 13.6001L22 12.2264" />
			<path d="M14.4 12L15.5767 6.11652" />
			<path d="M6 18L12 15" />
			<path d="M5.84326 20L22 23.9999" />
			<rect x={2} y={2} width={4} height={4} rx={2} />
			<rect
				x={26}
				y={26}
				width={4}
				height={4}
				rx={2}
				transform="rotate(-180 26 26)"
			/>
			<rect x={2} y={17} width={4} height={4} rx={2} />
			<rect
				x={26}
				y={14}
				width={4}
				height={4}
				rx={2}
				transform="rotate(-180 26 14)"
			/>
			<rect x={14} y={2} width={4} height={4} rx={2} />
			<rect
				x={16}
				y={16}
				width={4}
				height={4}
				rx={2}
				transform="rotate(-180 16 16)"
			/>
		</g>
	</svg>
)
export default Dapps
