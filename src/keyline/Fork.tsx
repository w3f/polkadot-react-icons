import * as React from 'react'
import { SVGProps } from 'react'
const Fork = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={26}
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M10.6821 8.85657H2V17.5387H10.6821V8.85657Z" />
		<path d="M25.9999 2H17.3177V10.6822H25.9999V2Z" />
		<path d="M25.9998 15.8913H17.3177V24.5735H25.9998V15.8913Z" />
		<path d="M16.5927 7.5L11.2624 11.2323" />
		<path d="M11.2332 15.3355L16.7327 19.1862" />
	</svg>
)
export default Fork
