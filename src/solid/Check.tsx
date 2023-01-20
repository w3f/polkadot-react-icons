import * as React from 'react'
import { SVGProps } from 'react'
const Check = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M23.7129 0.298769C24.1002 0.692512 24.095 1.32566 23.7012 1.71293L9.46758 15.7129C9.08942 16.0849 8.48664 16.0969 8.094 15.7402L0.327659 8.68615C-0.0811613 8.31482 -0.111556 7.68239 0.259772 7.27357C0.631099 6.86475 1.26353 6.83435 1.67236 7.20568L8.739 13.6242L22.2988 0.287066C22.6925 -0.100213 23.3257 -0.0949734 23.7129 0.298769Z"
		/>
	</svg>
)
export default Check
