import * as React from 'react'
import { SVGProps } from 'react'
const EditOn = (props: SVGProps<SVGSVGElement>) => (
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
			d="M18.4219 1.29289C18.8125 0.902369 19.4456 0.902369 19.8362 1.29289L25.7071 7.16386C26.0977 7.55439 26.0977 8.18755 25.7071 8.57807L22.0997 12.1855L14.8145 4.90036L18.4219 1.29289ZM13.4003 6.31457L3.08554 16.6293C2.95519 16.7597 2.8634 16.9235 2.82033 17.1027L0.963188 24.8309C0.881873 25.1692 0.982322 25.5255 1.2284 25.7716C1.47448 26.0177 1.83079 26.1182 2.16916 26.0368L9.89727 24.1797C10.0765 24.1366 10.2404 24.0448 10.3707 23.9145L20.6854 13.5998L13.4003 6.31457Z"
			stroke="none"
		/>
	</svg>
)
export default EditOn
