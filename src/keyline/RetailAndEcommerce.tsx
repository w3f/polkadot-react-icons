import * as React from 'react'
import { SVGProps } from 'react'
const RetailAndEcommerce = (props: SVGProps<SVGSVGElement>) => (
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
			d="M17.4216 15.7806H5.84633L1.98242 4.95508H20.6752L17.4216 15.7806ZM17.4216 15.7806L18.8978 20.958C18.8978 20.958 5.02769 20.958 3.27404 20.958"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M20.4227 5.42094L21.7088 1.5625H24.2811"
			stroke="black"
			strokeWidth={2.8}
		/>
		<circle
			cx={6.12776}
			cy={24.1373}
			r={1.71486}
			transform="rotate(-45 6.12776 24.1373)"
			stroke="black"
			strokeWidth={2.5}
		/>
		<circle
			cx={16.4173}
			cy={24.1373}
			r={1.71486}
			transform="rotate(-45 16.4173 24.1373)"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default RetailAndEcommerce
