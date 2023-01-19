import * as React from 'react'
import { SVGProps } from 'react'
const Block = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M13 26C20.1797 26 26 20.1797 26 13C26 9.83005 24.8654 6.9251 22.9802 4.66908C22.9551 4.70126 22.9277 4.73226 22.8981 4.76186L4.77658 22.8829C4.74174 22.9178 4.70497 22.9495 4.66662 22.9781C6.92299 24.8646 9.8289 26 13 26ZM3.25137 21.6005C3.28399 21.5542 3.32099 21.5101 3.36238 21.4687L21.4839 3.34763C21.52 3.31151 21.5582 3.27873 21.5981 3.24929C19.3065 1.22703 16.2966 0 13 0C5.8203 0 0 5.8203 0 13C0 16.2977 1.22787 19.3086 3.25137 21.6005Z"
		/>
	</svg>
)
export default Block
