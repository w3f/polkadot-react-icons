import * as React from 'react'
import { SVGProps } from 'react'
const CreateNewFromSource = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={26}
		height={26}
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M17.636 17.7083L17.636 24.125L2.05265 24.125L2.05266 8.54167L8.01099 8.54167" />
		<path d="M8.4694 17.7083L24.0527 17.7083L24.0527 2.12498L8.4694 2.12498L8.4694 17.7083Z" />
		<path d="M12.1581 9.84239L20.2598 9.88619" />
		<path d="M16.2319 5.81445L16.1881 13.9161" />
	</svg>
)
export default CreateNewFromSource
