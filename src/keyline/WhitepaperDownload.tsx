import * as React from 'react'
import { SVGProps } from 'react'
const WhitepaperDownload = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2.00001 26.0002V2.00024H14L20.4615 8.46178V26.0002H2.00001Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M20 8.46176H14V2.5" stroke="black" strokeWidth={2.5} />
		<path
			d="M11.462 11.9999L11.462 18.3178M14.424 16.318L11.462 19.2799L8.50001 16.318"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default WhitepaperDownload
