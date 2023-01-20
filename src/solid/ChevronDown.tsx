import * as React from 'react'
import { SVGProps } from 'react'
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 25 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M24.6346 0.799455C25.056 1.15641 25.1083 1.78741 24.7513 2.20884L13.7403 15.2088C13.5502 15.4333 13.2709 15.5627 12.9767 15.5625C12.6826 15.5624 12.4034 15.4327 12.2135 15.2081L1.22455 2.20808C0.868019 1.7863 0.920914 1.15535 1.3427 0.798815C1.76448 0.442279 2.39543 0.495173 2.75197 0.916956L12.978 13.0144L23.2252 0.916202C23.5821 0.494772 24.2131 0.442502 24.6346 0.799455Z"
		/>
	</svg>
)
export default ChevronDown
