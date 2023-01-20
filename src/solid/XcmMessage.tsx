import * as React from 'react'
import { SVGProps } from 'react'
const XcmMessage = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M5.61535 0C2.51408 0 0 2.51408 0 5.61535C0 8.71663 2.51408 11.2307 5.61535 11.2307C8.37434 11.2307 10.6686 9.24096 11.1414 6.61816L14.7693 6.61816V10.2307C14.7693 10.783 15.217 11.2307 15.7693 11.2307H25C25.5523 11.2307 26 10.783 26 10.2307V1C26 0.447715 25.5523 0 25 0H15.7693C15.217 0 14.7693 0.447715 14.7693 1V4.61816L11.1424 4.61816C10.6719 1.99259 8.37631 0 5.61535 0ZM21.3847 5.61816C21.3847 5.06588 20.937 4.61816 20.3847 4.61816L14.7758 4.61816V6.61816L20.3847 6.61816C20.937 6.61816 21.3847 6.17045 21.3847 5.61816Z"
		/>
	</svg>
)
export default XcmMessage
