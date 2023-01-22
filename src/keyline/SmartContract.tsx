import * as React from 'react'
import { SVGProps } from 'react'
const SmartContract = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M12.4846 4.61499H26.7098V9.94946V23.1078H12.4846V4.61499Z" />
		<path d="M22.9999 8.68042H16.3901" strokeMiterlimit={10} />
		<path d="M20.2458 12.6602H16.3901" strokeMiterlimit={10} />
		<path d="M22.9999 19.3152H16.3901" strokeMiterlimit={10} />
		<path
			d="M4.45978 14.1587L12.4465 14.1587"
			strokeMiterlimit={10}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M4.45977 5.18872L7.63774 5.18872L7.63774 23L4.45972 23"
			strokeMiterlimit={10}
			fill="none"
			data-nofill="true"
		/>
		<path d="M1.26074 5.18872L1.24995 5.18872" />
		<path d="M1.26074 14.1587L1.24995 14.1587" />
		<path d="M1.26074 23L1.24995 23" />
	</svg>
)
export default SmartContract
