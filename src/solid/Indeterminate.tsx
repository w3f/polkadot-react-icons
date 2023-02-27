import * as React from 'react'
import { SVGProps } from 'react'
const Indeterminate = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
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
			d="M1.99414 2.67578C1.99414 2.1235 2.44186 1.67578 2.99414 1.67578H26.9941C27.5464 1.67578 27.9941 2.1235 27.9941 2.67578V26.6758C27.9941 27.2281 27.5464 27.6758 26.9941 27.6758H2.99414C2.44186 27.6758 1.99414 27.2281 1.99414 26.6758V2.67578ZM9.84576 15.6997C9.29348 15.6967 8.84819 15.2466 8.85118 14.6943C8.85416 14.142 9.30429 13.6967 9.85657 13.6997L20.2461 13.7559C20.7984 13.7589 21.2437 14.209 21.2407 14.7613C21.2377 15.3136 20.7876 15.7588 20.2353 15.7559L9.84576 15.6997Z"
			stroke="none"
		/>
	</svg>
)
export default Indeterminate
