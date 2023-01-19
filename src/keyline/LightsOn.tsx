import * as React from 'react'
import { SVGProps } from 'react'
const LightsOn = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M13.9884 9.12827C11.227 9.12827 8.9884 11.3679 8.9884 14.1306C8.9884 16.1819 10.2225 17.9448 11.9884 18.7167L11.9883 23.7167H15.9883L15.9884 18.7167C17.7543 17.9448 18.9884 16.1819 18.9884 14.1306C18.9884 11.3679 16.7498 9.12827 13.9884 9.12827Z"
			stroke="black"
		/>
		<path d="M13.9883 5.12823L13.9883 2.12823" stroke="black" />
		<path d="M1.98834 14.1282L4.98834 14.1282" stroke="black" />
		<path d="M22.9883 14.1282L25.9883 14.1282" stroke="black" />
		<path d="M20.3523 7.76437L22.4736 5.64305" stroke="black" />
		<path d="M5.50283 5.64293L7.62415 7.76425" stroke="black" />
	</svg>
)
export default LightsOn
