import * as React from 'react'
import { SVGProps } from 'react'
const AirplaneMode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M12.2538 19.1308L9.47419 22.7394L13.9318 21.6569L18.3887 22.7394L15.5932 19.1308L15.6222 14.682L25.8701 17.4504L15.666 9.53824L15.7125 4.08386C15.7348 1.47108 12.4046 1.44054 12.3823 4.05333L12.3356 9.53824L2.04451 17.4503L12.2917 14.682C12.2978 16.1649 12.2664 17.6479 12.2538 19.1308Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default AirplaneMode
