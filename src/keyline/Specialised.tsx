import * as React from 'react'
import { SVGProps } from 'react'
const Specialised = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M13.8717 26.7691C20.9049 26.7691 26.6064 21.0676 26.6064 14.0344C26.6064 7.0013 20.9049 1.2998 13.8717 1.2998C6.83858 1.2998 1.13708 7.0013 1.13708 14.0344C1.13708 21.0676 6.83858 26.7691 13.8717 26.7691Z" />
			<path
				d="M20.0753 12.2127L17.325 15.3174L17.7161 19.4246L13.8779 17.7988L10.0519 19.4368L10.4309 15.3297L7.66833 12.2371L11.7388 11.3326L13.8657 7.78772L16.0048 11.3326L20.0753 12.2127Z"
				strokeMiterlimit={10}
			/>
		</g>
	</svg>
)
export default Specialised
