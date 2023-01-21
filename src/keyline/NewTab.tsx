import * as React from 'react'
import { SVGProps } from 'react'
const NewTab = (props: SVGProps<SVGSVGElement>) => (
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
			d="M26 16.9434V26.2383H2V2.23828H11.2908"
			fill="none"
			data-nofill="true"
		/>
		<path d="M11.4286 16.8097L25 3.23431" fill="none" data-nofill="true" />
		<path d="M16.3685 2.29291H25.9474V11.8719" fill="none" data-nofill="true" />
	</svg>
)
export default NewTab
