import * as React from 'react'
import { SVGProps } from 'react'
const Video = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M26 1.99976H2V23.1198H26V1.99976Z" strokeMiterlimit={40} />
		<path d="M18.32 14.4807L12.56 10.6398V18.3198L18.32 14.4807Z" />
		<path d="M2 6.79974H26" />
		<path d="M8.60495 6.20468L4.9599 2.55963" />
		<path d="M22.5965 6.27623L18.8613 2.54102" />
		<path d="M15.879 6.2788L12.157 2.55676" />
	</svg>
)
export default Video
