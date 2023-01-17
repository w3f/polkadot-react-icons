import * as React from 'react'
import { SVGProps } from 'react'
const Success = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={28}
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z" />
		<path d="M9.53394 13.4026L13.1421 16.7726L19.7548 10.0842" />
	</svg>
)
export default Success
