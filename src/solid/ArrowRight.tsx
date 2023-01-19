import * as React from 'react'
import { SVGProps } from 'react'
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M14.1005 20.2856C13.706 20.6721 13.6994 21.3052 14.0859 21.6998C14.4724 22.0943 15.1055 22.1008 15.5 21.7144L25.6998 11.723C25.8917 11.535 25.9999 11.2777 26 11.0091C26.0001 10.7404 25.8921 10.483 25.7004 10.2949L15.5007 0.286239C15.1065 -0.100576 14.4733 -0.0945883 14.0865 0.299613C13.6997 0.693812 13.7057 1.32695 14.0999 1.71376L22.5531 10.0086L1 10.0086C0.447716 10.0086 0 10.4563 0 11.0086C0 11.5609 0.447716 12.0086 1 12.0086L22.5501 12.0086L14.1005 20.2856Z"
		/>
	</svg>
)
export default ArrowRight
