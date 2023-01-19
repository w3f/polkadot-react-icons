import * as React from 'react'
import { SVGProps } from 'react'
const Metaverse = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2 20.4615L13.0769 26L24.1538 20.4615V7.53846L13.0769 2L2 7.53846V20.4615Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M5 14C5 15.6701 6.02353 17.1011 7.47754 17.7001C8.41213 18.085 9.43 17.656 10.2193 17.0246C11.845 15.724 14.155 15.724 15.7807 17.0246C16.57 17.656 17.5879 18.085 18.5225 17.7001C19.9765 17.1011 21 15.6701 21 14C21 11.7909 19.2091 10 17 10H9C6.79086 10 5 11.7909 5 14Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Metaverse
