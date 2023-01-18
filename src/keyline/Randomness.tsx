import * as React from 'react'
import { SVGProps } from 'react'
const Randomness = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={26}
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M1.25914 6L4.48384 6C7.25724 6 9.83277 7.43641 11.2902 9.796L15.2481 16.204C16.7056 18.5636 19.2811 20 22.0545 20L24 20L25.5 20"
			fill="none"
		/>
		<path d="M22.3968 16L26.24 19.9998L22.3968 24" fill="none" />
		<path
			d="M1.25914 20L4.48384 20C7.25724 20 9.83277 18.5636 11.2902 16.204L15.2481 9.796C16.7056 7.43642 19.2811 6 22.0545 6L24 6L25.5 6"
			fill="none"
		/>
		<path d="M22.3968 10L26.24 6.0002L22.3968 2" fill="none" />
	</svg>
)
export default Randomness
