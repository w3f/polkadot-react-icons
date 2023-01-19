import * as React from 'react'
import { SVGProps } from 'react'
const Teleport = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M7.28001 23.3814C4.16031 22.7331 2 21.6545 2 20.4334C2 18.4518 7.37596 16.8457 14.0079 16.8457C20.6399 16.8457 26.0158 18.4518 26.0158 20.4334C26.0158 21.6545 23.8628 22.7331 20.7431 23.3814"
			stroke="black"
		/>
		<path
			d="M11.0109 16.9655C8.97356 17.3684 7.50525 19.1548 7.50525 21.2317V26H20.521V21.2317C20.521 19.1548 19.0527 17.3684 17.0153 16.9655C16.1358 16.9042 14.9497 16.8447 14.007 16.8447C13.036 16.8447 11.9149 16.9004 11.0109 16.9655Z"
			stroke="black"
		/>
		<path
			d="M9.09811 5.06738C4.91398 5.6279 2 6.8839 2 8.34278C2 10.3244 7.37596 11.9305 14.0079 11.9305C20.6399 11.9305 26.0158 10.3244 26.0158 8.34278C26.0158 6.88201 23.0943 5.62507 18.9017 5.06549"
			stroke="black"
		/>
		<path
			d="M12.7953 11.9123L10.6004 9.26915C9.13584 7.5083 9.25285 4.92271 10.8712 3.30152C12.6037 1.56616 15.4149 1.56616 17.1474 3.30152C18.7658 4.92271 18.8828 7.5083 17.4182 9.26915L15.2224 11.9123C14.8232 11.9246 14.4184 11.9302 14.0088 11.9302C13.5946 11.9302 13.1992 11.9246 12.7953 11.9123Z"
			stroke="black"
		/>
	</svg>
)
export default Teleport
