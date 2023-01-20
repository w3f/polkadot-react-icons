import * as React from 'react'
import { SVGProps } from 'react'
const NightDarkMode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 25 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16.2844 1.19404C9.57284 -0.560205 2.71 3.45846 0.955755 10.17C-0.798486 16.8815 3.22018 23.7443 9.93169 25.4986C16.2211 27.1425 22.6421 23.7173 24.8697 17.7568C25.0291 17.3303 24.8803 16.85 24.5077 16.5884C24.1351 16.3267 23.6328 16.3498 23.2857 16.6445C21.5566 18.1126 19.1665 18.7399 16.8092 18.1237C12.968 17.1197 10.668 13.1919 11.672 9.35076C12.487 6.2327 15.2299 4.12801 18.2905 3.98565C18.7459 3.96446 19.1294 3.63789 19.2228 3.19164C19.3162 2.74538 19.0959 2.29242 18.6873 2.09033C17.9324 1.71707 17.1292 1.41487 16.2844 1.19404Z"
		/>
	</svg>
)
export default NightDarkMode
