import * as React from 'react'
import { SVGProps } from 'react'
const Wallets = (props: SVGProps<SVGSVGElement>) => (
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
		<g>
			<path d="M6.11719 7V2.86328H26.4695V20.0093H22.8445" />
			<path d="M22.4695 7.49976H2.11719V24.6457H22.4695V7.49976Z" />
			<path d="M21.4808 12.0699H15.2991C13.0883 12.0699 11.2961 13.8621 11.2961 16.0729C11.2961 18.2837 13.0883 20.0758 15.2991 20.0758H21.4808C22.0331 20.0758 22.4808 19.6281 22.4808 19.0758V13.0699C22.4808 12.5177 22.0331 12.0699 21.4808 12.0699Z" />
			<path d="M15.0181 16.0181L15 16" strokeMiterlimit={10} />
		</g>
	</svg>
)
export default Wallets
