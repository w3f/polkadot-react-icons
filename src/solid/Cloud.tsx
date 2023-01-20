import * as React from 'react'
import { SVGProps } from 'react'
const Cloud = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.06277 19.2437H20.462C20.4978 19.2475 20.5343 19.2495 20.5711 19.2495C21.8687 19.2495 23.5039 18.9407 24.7083 17.7363C26.755 15.6896 26.755 12.3711 24.7082 10.3244C24.0339 9.65007 23.2203 9.19762 22.3603 8.96762C22.5403 7.21313 22.5592 5.08298 21.2635 3.22752C18.8346 -0.25054 14.0065 -1.02389 10.4926 1.43005C9.80748 1.9085 9.08818 2.64781 8.51812 3.44813C8.15753 3.95436 7.82031 4.53576 7.59817 5.13816C7.42131 5.12488 7.24276 5.11812 7.06277 5.11812C3.16211 5.11812 0 8.28023 0 12.1809C0 16.0815 3.16211 19.2437 7.06277 19.2437Z"
		/>
	</svg>
)
export default Cloud
