import * as React from 'react'
import { SVGProps } from 'react'
const Authority = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 20 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6.01105 2.05935C8.08562 -0.357023 11.8255 -0.357023 13.9001 2.05935C15.1124 3.4714 15.4774 5.42377 14.8572 7.17845L13.546 10.8878C13.3575 11.4214 13.5674 12.0141 14.0497 12.31L19.4413 15.6178C19.5796 15.7027 19.6927 15.8182 19.774 15.9526H0.144063C0.225321 15.8181 0.338399 15.7025 0.476703 15.6176L5.86194 12.3105C6.34406 12.0145 6.55381 11.4218 6.36527 10.8884L5.05393 7.17844C4.43371 5.42377 4.79874 3.4714 6.01105 2.05935ZM0 17.9526V21.4415C0 21.9938 0.447715 22.4415 1 22.4415H18.9184C19.4707 22.4415 19.9184 21.9938 19.9184 21.4415V17.9526H0Z"
		/>
		<path d="M17.1264 25.3618H3.25928" stroke="black" strokeWidth={2} />
	</svg>
)
export default Authority
