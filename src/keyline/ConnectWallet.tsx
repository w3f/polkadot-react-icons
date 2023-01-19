import * as React from 'react'
import { SVGProps } from 'react'
const ConnectWallet = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M14.1556 15.7925L14.1556 20.4568" stroke="black" />
		<path
			d="M26 23.2285L16.8586 23.2285M2 23.2285L11.2816 23.2285"
			stroke="black"
		/>
		<path
			d="M14.0751 26.0001C15.608 26.0001 16.8507 24.7592 16.8507 23.2285C16.8507 21.6977 15.608 20.4568 14.0751 20.4568C12.5421 20.4568 11.2994 21.6977 11.2994 23.2285C11.2994 24.7592 12.5421 26.0001 14.0751 26.0001Z"
			stroke="black"
		/>
		<path d="M22.3687 2H6V15.79H22.3687V2Z" stroke="black" />
		<path
			d="M21.56 5.67548H16.6018C14.8237 5.67548 13.3823 7.11687 13.3823 8.89493C13.3823 10.673 14.8237 12.1144 16.6018 12.1144H21.56C22.0117 12.1144 22.3778 11.7483 22.3778 11.2966V6.49325C22.3778 6.0416 22.0117 5.67548 21.56 5.67548Z"
			stroke="black"
		/>
		<path
			d="M16.438 8.85698L16.4228 8.84174"
			stroke="black"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default ConnectWallet
