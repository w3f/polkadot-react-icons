import * as React from 'react'
import { SVGProps } from 'react'
const VideoPlay = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={26}
		height={26}
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM11.5153 8.27972C11.2064 8.09398 10.8215 8.08884 10.5077 8.26628C10.194 8.44372 10 8.77627 10 9.13672V17.3628C10 17.7232 10.1939 18.0557 10.5076 18.2332C10.8213 18.4106 11.2062 18.4056 11.5151 18.2199L18.3568 14.1078C18.6576 13.927 18.8416 13.6018 18.8417 13.2508C18.8417 12.8999 18.6578 12.5746 18.357 12.3937L11.5153 8.27972ZM12 15.595V10.9049L15.9008 13.2505L12 15.595Z"
		/>
	</svg>
)
export default VideoPlay
