import * as React from 'react'
import { SVGProps } from 'react'
const HashFunction = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M14.4824 2L14.4824 4.41076" />
		<path d="M14.4824 23.5892L14.4824 26" />
		<path d="M19.1909 2L19.1909 4.41076" />
		<path d="M9.77386 2L9.77387 4.41076" />
		<path d="M12.5265 16.8856L5 8.21664L23.4938 8.21665L16.5408 16.8856L16.5408 19.7753L12.5131 19.7753L12.5265 16.8856Z" />
	</svg>
)
export default HashFunction
