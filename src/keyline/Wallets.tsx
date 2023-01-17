import * as React from 'react'
import { SVGProps } from 'react'
const Wallets = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={25}
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M6.11719 6V1.86328H26.4695V19.0093H22.8445" />
		<path d="M22.4695 6.49976H2.11719V23.6457H22.4695V6.49976Z" />
		<path d="M21.4808 11.0699H15.2991C13.0883 11.0699 11.2961 12.8621 11.2961 15.0729C11.2961 17.2837 13.0883 19.0758 15.2991 19.0758H21.4808C22.0331 19.0758 22.4808 18.6281 22.4808 18.0758V12.0699C22.4808 11.5177 22.0331 11.0699 21.4808 11.0699Z" />
		<path d="M15.0181 15.0181L15 15" strokeMiterlimit={10} />
	</svg>
)
export default Wallets
