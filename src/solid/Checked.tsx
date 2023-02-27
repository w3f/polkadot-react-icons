import * as React from 'react'
import { SVGProps } from 'react'
const Checked = (props: SVGProps<SVGSVGElement>) => (
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
			d="M1 2C1 1.44772 1.44772 1 2 1H26C26.5523 1 27 1.44772 27 2V26C27 26.5523 26.5523 27 26 27H2C1.44772 27 1 26.5523 1 26V2ZM19.9316 11.7031C20.3199 11.3103 20.3163 10.6772 19.9236 10.2889C19.5308 9.90059 18.8977 9.90419 18.5094 10.2969L12.58 16.2941L9.68222 13.5876C9.27861 13.2106 8.64581 13.2322 8.26883 13.6358C7.89185 14.0394 7.91344 14.6722 8.31705 15.0492L11.9252 18.4192C12.3207 18.7886 12.9384 18.7764 13.3189 18.3915L19.9316 11.7031Z"
			stroke="none"
		/>
	</svg>
)
export default Checked
