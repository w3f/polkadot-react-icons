import * as React from 'react'
import { SVGProps } from 'react'
const Interconnected = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 0C14.7614 0 17 2.23858 17 5C17 7.45082 15.2367 9.4898 12.9095 9.91748V12.6552L16.0059 14.9952C16.8405 14.3702 17.877 14 19 14C21.7614 14 24 16.2386 24 19C24 21.7614 21.7614 24 19 24C16.2386 24 14 21.7614 14 19C14 18.0869 14.2448 17.231 14.6722 16.4943L11.9138 14.4096L9.27433 16.4044C9.73479 17.161 10 18.0495 10 19C10 21.7614 7.76142 24 5 24C2.23858 24 0 21.7614 0 19C0 16.2386 2.23858 14 5 14C6.08402 14 7.08748 14.345 7.90657 14.9311L10.9095 12.6616V9.88074C8.67251 9.38313 7 7.38689 7 5C7 2.23858 9.23858 0 12 0Z"
		/>
	</svg>
)
export default Interconnected
