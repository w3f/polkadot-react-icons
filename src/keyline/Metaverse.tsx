import * as React from 'react'
import { SVGProps } from 'react'
const Metaverse = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M3 20.4615L14.0769 26L25.1538 20.4615V7.53846L14.0769 2L3 7.53846V20.4615Z" />
		<path d="M6 14C6 15.6701 7.02353 17.1011 8.47754 17.7001C9.41213 18.085 10.43 17.656 11.2193 17.0246C12.845 15.724 15.155 15.724 16.7807 17.0246C17.57 17.656 18.5879 18.085 19.5225 17.7001C20.9765 17.1011 22 15.6701 22 14C22 11.7909 20.2091 10 18 10H10C7.79086 10 6 11.7909 6 14Z" />
	</svg>
)
export default Metaverse
