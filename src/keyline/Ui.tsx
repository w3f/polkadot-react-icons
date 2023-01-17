import * as React from 'react'
import { SVGProps } from 'react'
const Ui = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={28}
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M2 25.7584L26 25.7584L26 2.00001L2 2.00002L2 25.7584Z" />
		<path d="M25.993 8.51306H2.00028" />
		<path d="M21.9614 21.5035H16.3515" strokeMiterlimit={10} />
		<path d="M21.9614 16.7718H16.3515" strokeMiterlimit={10} />
		<path d="M21.9614 12.3423H16.3515" strokeMiterlimit={10} />
		<path d="M11.6991 21.5035H6.08917" strokeMiterlimit={10} />
		<path
			d="M11.5463 12.3423H6.24258V16.7718H11.5463V12.3423Z"
			strokeMiterlimit={10}
		/>
		<path d="M9.25124 5.43288L9.23407 5.41571" strokeMiterlimit={10} />
		<path d="M5.4659 5.43288L5.44873 5.41571" strokeMiterlimit={10} />
	</svg>
)
export default Ui
