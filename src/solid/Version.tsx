import * as React from 'react'
import { SVGProps } from 'react'
const Version = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.79023 0.31488C2.90186 -0.026588 8.69248 -0.660568 11.3077 2.091C13.6942 4.60193 17.8436 4.73875 19.8492 4.63879C20.4588 4.60841 21 5.08622 21 5.69652L21 16.8639C21 17.3599 20.6371 17.7775 20.1422 17.8106C18.2767 17.9355 13.8174 17.9205 11.3077 15.2799C9.09451 12.9513 4.60717 13.0474 2 13.3389L2 25C2 25.5523 1.55228 26 1 26C0.447715 26 0 25.5523 0 25V1.99999C0 1.99906 1.2885e-06 1.99812 3.86382e-06 1.99718L3.92522e-06 1.26424C3.88414e-06 0.794334 0.326353 0.389893 0.79023 0.31488Z"
		/>
	</svg>
)
export default Version
