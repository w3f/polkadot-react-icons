import * as React from 'react'
import { SVGProps } from 'react'
const Bond = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 17 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M15.3038 6.43753C15.3038 8.88855 12.3237 10.8756 8.6467 10.8756C5.03572 10.8756 2.10374 8.95739 2 6.56673V9.92591C2 12.3769 4.98008 14.364 8.65708 14.364C12.3341 14.364 15.3142 12.3769 15.3142 9.92591C15.3142 9.62319 15.3915 6.72328 15.3047 6.43658L15.3038 6.43753Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M8.67296 10.8761C12.349 10.8761 15.33 8.88907 15.33 6.43805C15.33 3.98703 12.35 2 8.67296 2C4.99596 2 2.01588 3.98703 2.01588 6.43805C2.01588 8.88907 4.99596 10.8761 8.67296 10.8761Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M8.61197 26L8.61197 19.5M4.98399 22.1012L8.61189 18.4733L12.2398 22.1012"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default Bond
