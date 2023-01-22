import * as React from 'react'
import { SVGProps } from 'react'
const HeterogeneousSharding = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M7.1093 17.7642L10.2502 12.37" strokeMiterlimit={10} />
		<path d="M20.8338 17.7642L17.693 12.37" strokeMiterlimit={10} />
		<path d="M13.9553 6.49153C15.8158 6.49153 17.324 5.48605 17.324 4.24577C17.324 3.00548 15.8158 2 13.9553 2C12.0949 2 10.5867 3.00548 10.5867 4.24577C10.5867 5.48605 12.0949 6.49153 13.9553 6.49153V6.49153Z" />
		<path d="M17.324 4.24583C17.324 5.48612 15.8158 6.4916 13.9553 6.4916C12.0949 6.4916 10.5867 5.48612 10.5867 4.24583V7.65046C10.5867 8.89075 12.0949 9.7561 13.9553 9.7561C15.8158 9.7561 17.324 8.89075 17.324 7.65046V4.24583Z" />
		<rect x={4} y={21} width={5.14286} height={5.14286} />
		<path d="M22.5714 21L20 26.1429H22.5714H25.1429L22.5714 21Z" />
	</svg>
)
export default HeterogeneousSharding
