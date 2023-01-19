import * as React from 'react'
import { SVGProps } from 'react'
const SignSpecs = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.726 0V10.3121L15.745 7.29314C16.1355 6.90261 16.7687 6.90261 17.1592 7.29314C17.5497 7.68366 17.5497 8.31683 17.1592 8.70735L12.4371 13.4294C12.0468 13.8197 11.4141 13.82 11.0235 13.43L6.29349 8.70794C5.90263 8.31775 5.9021 7.68458 6.2923 7.29373C6.6825 6.90288 7.31566 6.90235 7.70651 7.29254L10.726 10.307V0H1C0.447715 0 0 0.447714 0 0.999999V19.219C0 19.7713 0.447716 20.219 1 20.219H23C23.5523 20.219 24 19.7713 24 19.219V1C24 0.447715 23.5523 0 23 0H12.726Z"
		/>
	</svg>
)
export default SignSpecs
