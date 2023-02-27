import * as React from 'react'
import { SVGProps } from 'react'
const CreateNewFromSource = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M18.636 18.7083L18.636 25.125L3.05265 25.125L3.05266 9.54167L9.01099 9.54167" />
		<path d="M9.4694 18.7083L25.0527 18.7083L25.0527 3.12498L9.4694 3.12498L9.4694 18.7083Z" />
		<path d="M13.1581 10.8424L21.2598 10.8862" />
		<path d="M17.2319 6.81445L17.1881 14.9161" />
	</svg>
)
export default CreateNewFromSource
