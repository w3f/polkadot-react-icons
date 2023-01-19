import * as React from 'react'
import { SVGProps } from 'react'
const Announcement = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M10.4009 20.0053C15.387 20.5294 19.8539 16.9122 20.378 11.9261C20.9021 6.93998 17.2849 2.47306 12.2988 1.94896C7.31268 1.42487 2.84576 5.04205 2.32166 10.0282C2.06161 12.5023 2.82119 14.8486 4.26172 16.6487L1.7449 22.6804L7.03082 18.9645C8.04542 19.5136 9.18226 19.8772 10.4009 20.0053Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M11.5327 12.1188L11.5255 6.64001"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M11.543 15.0295L11.5259 15.0124"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default Announcement
