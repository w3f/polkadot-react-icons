import * as React from 'react'
import { SVGProps } from 'react'
const EditOn = (props: SVGProps<SVGSVGElement>) => (
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
			d="M18.4219 0.292893C18.8125 -0.097631 19.4456 -0.097631 19.8362 0.292893L25.7071 6.16386C26.0977 6.55439 26.0977 7.18755 25.7071 7.57807L22.0997 11.1855L14.8145 3.90036L18.4219 0.292893ZM13.4003 5.31457L3.08554 15.6293C2.95519 15.7597 2.8634 15.9235 2.82033 16.1027L0.963187 23.8309C0.881873 24.1692 0.982322 24.5255 1.2284 24.7716C1.47448 25.0177 1.83079 25.1182 2.16916 25.0368L9.89727 23.1797C10.0765 23.1366 10.2404 23.0448 10.3707 22.9145L20.6854 12.5998L13.4003 5.31457Z"
		/>
	</svg>
)
export default EditOn
