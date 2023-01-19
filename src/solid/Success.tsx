import * as React from 'react'
import { SVGProps } from 'react'
const Success = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
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
			d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM19.7355 9.46797C20.1238 9.07523 20.1202 8.44207 19.7275 8.05377C19.3348 7.66548 18.7016 7.66908 18.3133 8.06182L11.9734 14.4743L8.85153 11.5585C8.44792 11.1815 7.81512 11.2031 7.43814 11.6067C7.06116 12.0103 7.08275 12.6431 7.48636 13.0201L11.3185 16.5994C11.714 16.9688 12.3317 16.9565 12.7122 16.5717L19.7355 9.46797Z"
		/>
	</svg>
)
export default Success
