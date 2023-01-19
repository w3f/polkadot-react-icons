import * as React from 'react'
import { SVGProps } from 'react'
const ScamAlert = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.9965 0L0.122349 21.8955C-0.238999 22.5618 0.243417 23.3722 1.0014 23.3722H24.9593C25.7173 23.3722 26.1997 22.5618 25.8384 21.8955L13.9965 0.0594872V10.5251C15.842 10.9741 17.212 12.6377 17.212 14.6213C17.212 16.9495 15.3247 18.8369 12.9965 18.8369C10.6683 18.8369 8.78096 16.9495 8.78096 14.6213C8.78096 14.069 9.22867 13.6213 9.78096 13.6213C10.3332 13.6213 10.781 14.069 10.781 14.6213C10.781 15.8449 11.7729 16.8369 12.9965 16.8369C14.2201 16.8369 15.212 15.8449 15.212 14.6213C15.212 13.3977 14.2201 12.4058 12.9965 12.4058C12.4442 12.4058 11.9965 11.9581 11.9965 11.4058V0Z"
		/>
	</svg>
)
export default ScamAlert
