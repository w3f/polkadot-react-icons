import * as React from 'react'
import { SVGProps } from 'react'
const SupplyChain = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M10.4636 5.76844C10.4636 7.84969 12.1507 9.53687 14.232 9.53687C16.3132 9.53688 18.0004 7.84969 18.0004 5.76844C18.0004 3.68719 16.3132 2 14.232 2C12.1507 2 10.4636 3.68719 10.4636 5.76844Z" />
		<path
			d="M10.2056 5.76839L5.38863 5.76839L5.38863 18.5M8.66691 16.2038L5.38863 19.5819L2.00021 16.2933"
			fill="none"
		/>
		<path d="M16.838 22.2316C16.838 20.1503 15.1508 18.4631 13.0696 18.4631C10.9883 18.4631 9.30113 20.1503 9.30113 22.2316C9.30113 24.3128 10.9883 26 13.0696 26C15.1508 26 16.838 24.3128 16.838 22.2316Z" />
		<path
			d="M17.0962 22.2316L21.9132 22.2316L21.9132 9.5M18.6349 11.7962L21.9132 8.41809L25.3016 11.7067"
			fill="none"
		/>
	</svg>
)
export default SupplyChain
