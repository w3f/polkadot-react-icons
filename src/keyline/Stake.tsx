import * as React from 'react'
import { SVGProps } from 'react'
const Stake = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M24.735 15.924V18.5202C24.735 22.3374 20.0933 24.9999 14.3675 24.9999C8.64169 24.9999 4 22.3374 4 18.5202V15.924" />
		<path d="M14.3675 21.9761C20.0933 21.9761 24.735 18.8817 24.735 15.0644C24.735 11.2472 20.0933 8.15277 14.3675 8.15277C8.64169 8.15277 4 11.2472 4 15.0644C4 18.8817 8.64169 21.9761 14.3675 21.9761Z" />
		<path d="M14.3678 2.99997L14.3678 15.3903M11.3078 13.3305L14.3676 16.3902L17.4273 13.3305" />
	</svg>
)
export default Stake
