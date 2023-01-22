import * as React from 'react'
import { SVGProps } from 'react'
const PublicKey = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M5.00001 2H23.4615V26H5.00001V2Z" />
		<path d="M12.736 12.4191L12.2852 11.8857C11.4629 10.9126 11.5284 9.47051 12.4355 8.576C13.3848 7.63988 14.91 7.63988 15.8593 8.576C16.7664 9.47051 16.8319 10.9126 16.0096 11.8857L15.5589 12.419C15.2578 12.7753 15.4281 13.3237 15.878 13.4468L16.5409 13.6283C18.2966 14.1088 19.514 15.7042 19.514 17.5245V19.2259H14.1474H8.78522V17.5214C8.78522 15.7028 10.0014 14.1087 11.7555 13.6282L12.417 13.447C12.8669 13.3237 13.0371 12.7754 12.736 12.4191Z" />
	</svg>
)
export default PublicKey
