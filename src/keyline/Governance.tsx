import * as React from 'react'
import { SVGProps } from 'react'
const Governance = (props: SVGProps<SVGSVGElement>) => (
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
		<g>
			<circle cx={14.0001} cy={13.8747} r={3.30708} />
			<circle cx={14.0001} cy={24.1101} r={1.88976} />
			<circle cx={14.0001} cy={3.88976} r={1.88976} />
			<circle
				cx={24.1102}
				cy={13.9999}
				r={1.88976}
				transform="rotate(-90 24.1102 13.9999)"
			/>
			<circle
				cx={3.88976}
				cy={13.9999}
				r={1.88976}
				transform="rotate(-90 3.88976 13.9999)"
			/>
			<circle
				cx={21.149}
				cy={21.1491}
				r={1.88976}
				transform="rotate(-45 21.149 21.1491)"
			/>
			<circle
				cx={6.85112}
				cy={6.85082}
				r={1.88976}
				transform="rotate(-45 6.85112 6.85082)"
			/>
			<circle
				cx={21.149}
				cy={6.85099}
				r={1.88976}
				transform="rotate(-135 21.149 6.85099)"
			/>
			<circle
				cx={6.85107}
				cy={21.149}
				r={1.88976}
				transform="rotate(-135 6.85107 21.149)"
			/>
		</g>
	</svg>
)
export default Governance
