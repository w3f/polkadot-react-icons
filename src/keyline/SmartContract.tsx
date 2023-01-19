import * as React from 'react'
import { SVGProps } from 'react'
const SmartContract = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M12.4846 1.61499H26.7098V6.94946V20.1078H12.4846V1.61499Z"
			stroke="black"
		/>
		<path
			d="M22.9999 5.68042L16.3901 5.68042"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path d="M20.2458 9.66016H16.3901" stroke="black" strokeMiterlimit={10} />
		<path d="M22.9999 16.3152H16.3901" stroke="black" strokeMiterlimit={10} />
		<path
			d="M4.45978 11.1587L12.4465 11.1587"
			stroke="black"
			strokeMiterlimit={10}
			fill="none"
		/>
		<path
			d="M4.45977 2.18872L7.63774 2.18872L7.63774 20L4.45972 20"
			stroke="black"
			strokeMiterlimit={10}
			fill="none"
		/>
		<path d="M1.26074 2.18872L1.24995 2.18872" stroke="black" />
		<path d="M1.26074 11.1587L1.24995 11.1587" stroke="black" />
		<path d="M1.26074 20L1.24995 20" stroke="black" />
	</svg>
)
export default SmartContract
