import * as React from 'react'
import { SVGProps } from 'react'
const Privacy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M1.56567 5.27602V19.073L11.64 25.5625L21.8522 18.9811V5.27602L11.7043 1.5625L1.56567 5.27602Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M9.10339 12.1966V10.919C9.10339 10.228 9.37789 9.56533 9.86651 9.07671C10.3551 8.5881 11.0178 8.3136 11.7088 8.3136C12.3981 8.31626 13.0582 8.59193 13.5447 9.08026C14.0311 9.56859 14.3042 10.2298 14.3042 10.919V12.1966"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M15.8637 12.1967H7.55444V17.4377H15.8637V12.1967Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Privacy
