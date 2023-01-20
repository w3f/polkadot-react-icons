import * as React from 'react'
import { SVGProps } from 'react'
const Eve = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M8.02969 9.58746L7.12147 8.53609C5.67139 6.85746 5.78596 4.33823 7.38243 2.79815C9.00099 1.23677 11.5651 1.23677 13.1837 2.79815C14.7801 4.33823 14.8947 6.85746 13.4446 8.53609L12.5366 9.58716C12.0621 10.1365 12.2218 10.9845 12.8636 11.3235L14.4551 12.1643C17.6036 13.8277 19.5735 17.0963 19.5736 20.6572L19.5736 20.9455H14.4943V24H5.35223L5.35223 20.9455H1.00006L1.00006 20.6523C1.00002 17.094 2.96792 13.8274 6.11361 12.1642L7.703 11.3238C8.34465 10.9845 8.50416 10.1367 8.02969 9.58746Z"
			stroke="black"
			strokeWidth={2}
		/>
	</svg>
)
export default Eve
