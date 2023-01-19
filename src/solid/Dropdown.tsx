import * as React from 'react'
import { SVGProps } from 'react'
const Dropdown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M26.918 2.84831C27.2551 2.48357 27.3442 1.95391 27.1451 1.49895C26.9461 1.04398 26.4966 0.75 26 0.75H1.99997C1.50358 0.75 1.05423 1.04371 0.855034 1.49837C0.655834 1.95303 0.744533 2.48248 1.08104 2.84739L13.069 15.8474C13.3055 16.1039 13.6384 16.2498 13.9873 16.25C14.3362 16.2502 14.6692 16.1045 14.906 15.8483L26.918 2.84831Z"
		/>
	</svg>
)
export default Dropdown
