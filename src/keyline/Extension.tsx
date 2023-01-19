import * as React from 'react'
import { SVGProps } from 'react'
const Extension = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M9.44828 6.1379H2V13.5862H3.65517C5.02636 13.5862 6.13794 14.6978 6.13794 16.069C6.13794 17.4402 5.02636 18.5517 3.65517 18.5517H2V26H9.44828V24.3448C9.44828 22.9736 10.5599 21.8621 11.9311 21.8621C13.3022 21.8621 14.4138 22.9736 14.4138 24.3448V26H21.8621V17.7241H23.5172C24.8884 17.7241 26 16.6126 26 15.2414C26 13.8702 24.8884 12.7586 23.5172 12.7586H21.8621V6.1379H14.4138V4.48273C14.4138 3.11154 13.3022 2 11.9311 2C10.5599 2 9.44828 3.11154 9.44828 4.48273V6.1379Z"
			stroke="black"
		/>
	</svg>
)
export default Extension
