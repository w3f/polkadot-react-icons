import * as React from 'react'
import { SVGProps } from 'react'
const WalletDeposit = (props: SVGProps<SVGSVGElement>) => (
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
		<g>
			<path d="M23.9449 2H5V17.9603H23.9449V2Z" />
			<path d="M23.009 6.25403H17.2704C15.2125 6.25403 13.5443 7.92228 13.5443 9.98016C13.5443 12.0381 15.2125 13.7063 17.2704 13.7063H23.009C23.5317 13.7063 23.9555 13.2826 23.9555 12.7598V7.2005C23.9555 6.67778 23.5317 6.25403 23.009 6.25403Z" />
			<path
				d="M17.213 22.741L14.0732 26L10.9388 22.741"
				fill="none"
				data-nofill="true"
			/>
			<path d="M14.0732 25L14.0732 18.3316" />
			<path d="M17.0181 10.0181L17 10" strokeMiterlimit={10} />
		</g>
	</svg>
)
export default WalletDeposit
