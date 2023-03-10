import * as React from 'react'
import { SVGProps } from 'react'
const Contract = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M18.5874 17.1336L14.457 18.11L15.4333 13.9786L20.3809 9.03099V8.99469V2.16336H2.16339V25.8459H11.2721H20.3809V15.3411L18.5874 17.1336Z" />
		<path d="M16.7372 5.80707H5.80707" strokeMiterlimit={10} />
		<path d="M12.1833 9.44983H5.80707" strokeMiterlimit={10} />
		<path d="M12.1824 21.2892H5.80707" strokeMiterlimit={10} />
		<path d="M22.0282 7.38367C22.8993 6.51253 24.3121 6.51253 25.1833 7.38367C26.0544 8.2548 26.0544 9.6676 25.1833 10.5387L18.5883 17.1337L14.457 18.11L15.4333 13.9786L22.0282 7.38367Z" />
	</svg>
)
export default Contract
