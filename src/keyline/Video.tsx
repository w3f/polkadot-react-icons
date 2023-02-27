import * as React from 'react'
import { SVGProps } from 'react'
const Video = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M26 2.99976H2V24.1198H26V2.99976Z" strokeMiterlimit={40} />
		<path d="M18.32 15.4807L12.56 11.6398V19.3198L18.32 15.4807Z" />
		<path d="M2 7.79974H26" />
		<path d="M19.4972 3.55933L22.783 7.25587" />
		<path d="M12 3.55933L15.2858 7.25587" />
		<path d="M5 3.55933L8.28581 7.25587" />
	</svg>
)
export default Video
