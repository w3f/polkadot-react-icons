import * as React from 'react'
import { SVGProps } from 'react'
const Cryptocurrency = (props: SVGProps<SVGSVGElement>) => (
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
			d="M19.8885 12.3879C23.3217 12.3879 26.1049 15.1711 26.1049 18.6043C26.1049 22.0375 23.3217 24.8207 19.8885 24.8207C17.3384 24.8207 15.1469 23.2851 14.1882 21.0882"
			strokeMiterlimit={10}
		/>
		<path
			d="M13.8626 16C14.2286 16.7922 14.4328 17.6744 14.4328 18.6044C14.4328 22.0376 11.6496 24.8208 8.21643 24.8208C4.78322 24.8208 2.00006 22.0376 2.00006 18.6044C2.00006 15.2107 4.71949 12.4522 8.09809 12.3891"
			strokeMiterlimit={10}
		/>
		<path
			d="M13.9888 15.4327C17.422 15.4327 20.2051 12.6496 20.2051 9.21637C20.2051 5.78316 17.422 3 13.9888 3C10.5556 3 7.7724 5.78316 7.7724 9.21637C7.7724 12.6496 10.5556 15.4327 13.9888 15.4327Z"
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Cryptocurrency
