import * as React from 'react'
import { SVGProps } from 'react'
const Drip = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={18}
		height={27}
		viewBox="0 0 18 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M2 16.8836C2 22.4036 5.00306 25 9 25C12.9969 25 16 22.4036 16 16.8836C16 11.3636 9 2 9 2C9 2 2 11.3636 2 16.8836Z" />
	</svg>
)
export default Drip
