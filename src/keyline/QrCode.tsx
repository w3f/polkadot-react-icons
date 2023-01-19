import * as React from 'react'
import { SVGProps } from 'react'
const QrCode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M18.32 1.375H26V9.055" stroke="black" fill="none" />
		<path
			d="M9.67999 25.375L1.99999 25.375L1.99999 16.735"
			stroke="black"
			fill="none"
		/>
		<path d="M26 17.695L26 25.375L18.32 25.375" stroke="black" fill="none" />
		<path d="M2 9.05496L2 1.37496L9.68 1.37496" stroke="black" fill="none" />
		<path d="M12.0001 5.37503H6.00006V11.375H12.0001V5.37503Z" stroke="black" />
		<path
			d="M22.0002 5.37506H16.0002V11.3751H22.0002V5.37506Z"
			stroke="black"
		/>
		<path d="M22.0002 15.375H16.0002V21.375H22.0002V15.375Z" stroke="black" />
		<path d="M12.0001 15.375H6.00012V21.375H12.0001V15.375Z" stroke="black" />
	</svg>
)
export default QrCode
