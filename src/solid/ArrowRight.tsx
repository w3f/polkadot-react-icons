import * as React from 'react'
import { SVGProps } from 'react'
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M14.1005 20.2856C13.706 20.6721 13.6994 21.3052 14.0859 21.6998C14.4724 22.0943 15.1055 22.1008 15.5 21.7144L25.6998 11.723C25.8917 11.535 25.9999 11.2777 26 11.0091C26.0001 10.7404 25.8921 10.483 25.7004 10.2949L15.5007 0.286239C15.1065 -0.100575 14.4733 -0.0945882 14.0865 0.299613C13.6997 0.693812 13.7057 1.32695 14.0999 1.71376L22.5533 10.0088L1 10.0088C0.447716 10.0088 0 10.4565 0 11.0088C0 11.5611 0.447716 12.0088 1 12.0088L22.5499 12.0088L14.1005 20.2856Z"
		/>
	</svg>
)
export default ArrowRight
