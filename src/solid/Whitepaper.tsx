import * as React from 'react'
import { SVGProps } from 'react'
const Whitepaper = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 0H1C0.447716 0 0 0.447715 0 1V25C0 25.5523 0.447716 26 1 26H19.4615C20.0138 26 20.4615 25.5523 20.4615 25V8.46176H13C12.4477 8.46176 12 8.01405 12 7.46176V0ZM19.876 6.46176H14V0.585765L19.876 6.46176Z"
		/>
	</svg>
)
export default Whitepaper
