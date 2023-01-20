import * as React from 'react'
import { SVGProps } from 'react'
const Verify = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M19.7397 3.99994L21.2397 5.99994L26.2397 1.99994"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M9.55662 11.7572L8.64731 10.664C7.09538 8.79821 7.21968 6.05754 8.93412 4.33992C10.7698 2.50088 13.7495 2.50088 15.5851 4.33992C17.2996 6.05754 17.4239 8.79821 15.872 10.664L14.9628 11.7569C14.3821 12.4551 14.7148 13.5199 15.5898 13.7632L16.8215 14.1058C20.194 15.0437 22.5276 18.1148 22.5276 21.6153V24.9918H2V21.6094C2 18.1119 4.33128 15.0433 7.70074 14.1056L8.92988 13.7635C9.80471 13.5201 10.1373 12.4553 9.55662 11.7572Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Verify
