import * as React from 'react'
import { SVGProps } from 'react'
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
			d="M15.1005 23.2856C14.706 23.6721 14.6994 24.3052 15.0859 24.6998C15.4724 25.0943 16.1055 25.1008 16.5 24.7144L26.6998 14.723C26.8917 14.535 26.9999 14.2777 27 14.0091C27.0001 13.7404 26.8921 13.483 26.7004 13.2949L16.5007 3.28624C16.1065 2.89942 15.4733 2.90541 15.0865 3.29961C14.6997 3.69381 14.7057 4.32695 15.0999 4.71376L23.5533 13.0088L2 13.0088C1.44772 13.0088 1 13.4565 1 14.0088C1 14.5611 1.44772 15.0088 2 15.0088L23.5499 15.0088L15.1005 23.2856Z"
			stroke="none"
		/>
	</svg>
)
export default ArrowRight
