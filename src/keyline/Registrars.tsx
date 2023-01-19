import * as React from 'react'
import { SVGProps } from 'react'
const Registrars = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<rect x={2} y={2} width={20} height={24} stroke="black" strokeWidth={2.5} />
		<path d="M9 20L11 22L15 18" stroke="black" strokeWidth={2.5} />
		<path
			d="M17.5184 8.23901L9.98056 8.23901M6.49249 8.23902L6.4817 8.23902"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M17.5184 12.2612L9.98056 12.2612M6.49249 12.2612L6.4817 12.2612"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Registrars
