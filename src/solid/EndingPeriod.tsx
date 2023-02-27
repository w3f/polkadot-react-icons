import * as React from 'react'
import { SVGProps } from 'react'
const EndingPeriod = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1 14C1 6.8203 6.8203 1 14 1C21.1797 1 27 6.8203 27 14C27 21.1797 21.1797 27 14 27C6.8203 27 1 21.1797 1 14ZM5.87172 12.3518C5.31943 12.3518 4.87172 12.7996 4.87173 13.3518C4.87174 13.9041 5.31946 14.3518 5.87174 14.3518L13.9999 14.3517C14.5522 14.3517 14.9999 13.904 14.9999 13.3517C14.9999 12.7994 14.5522 12.3517 13.9999 12.3517L5.87172 12.3518Z"
			stroke="none"
		/>
	</svg>
)
export default EndingPeriod
