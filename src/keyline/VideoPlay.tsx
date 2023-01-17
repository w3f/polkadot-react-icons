import * as React from 'react'
import { SVGProps } from 'react'
const VideoPlay = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={28}
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M13.9766 26.0742C20.604 26.0742 25.9766 20.7016 25.9766 14.0742C25.9766 7.4468 20.604 2.07422 13.9766 2.07422C7.34914 2.07422 1.97656 7.4468 1.97656 14.0742C1.97656 20.7016 7.34914 26.0742 13.9766 26.0742Z" />
		<path d="M18.8183 14.1882L11.9766 10.0742V18.3003L18.8183 14.1882Z" />
	</svg>
)
export default VideoPlay
