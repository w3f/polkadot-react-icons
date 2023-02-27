import * as React from 'react'
import { SVGProps } from 'react'
const WalletWithdraw = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M23.8458 10.1229H4.99995V25.9998H23.8458V10.1229Z" />
			<path d="M22.9147 14.3546H17.2061C15.159 14.3546 13.4995 16.0141 13.4995 18.0613C13.4995 20.1084 15.159 21.7679 17.2061 21.7679H22.9147C23.4347 21.7679 23.8562 21.3464 23.8562 20.8264V15.2961C23.8562 14.7761 23.4347 14.3546 22.9147 14.3546Z" />
			<path
				d="M14.7695 9.62805L14.7695 3M11.6461 5.24169L14.7695 1.99976L17.8874 5.24169"
				fill="none"
				data-nofill="true"
			/>
			<path d="M17.0181 18.0181L17 18" strokeMiterlimit={10} />
		</g>
	</svg>
)
export default WalletWithdraw
