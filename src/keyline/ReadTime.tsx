import * as React from 'react'
import { SVGProps } from 'react'
const ReadTime = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path d="M12.7499 19.1897H7.13043" strokeMiterlimit={10} />
			<path d="M16 15.9621H7.13043" strokeMiterlimit={10} />
			<path d="M20.1537 15.8824V8.65379L14.5 3H4.00005V23.9998H12.5" />
			<path d="M19.3281 8.6538H14.4999V4" />
			<path d="M18.5 27.25C21.6756 27.25 24.25 24.6756 24.25 21.5C24.25 18.3244 21.6756 15.75 18.5 15.75C15.3244 15.75 12.75 18.3244 12.75 21.5C12.75 24.6756 15.3244 27.25 18.5 27.25Z" />
			<path d="M18.4153 19.1429V21.5143L17.4852 22.6429" />
		</g>
	</svg>
)
export default ReadTime
