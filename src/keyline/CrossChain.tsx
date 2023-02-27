import * as React from 'react'
import { SVGProps } from 'react'
const CrossChain = (props: SVGProps<SVGSVGElement>) => (
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
			<path d="M6.46256 2L6.46256 9.02948M6.46254 26L6.46254 18.9235" />
			<path d="M21.3759 2L21.3759 9.02948M21.3759 26L21.3759 18.9235" />
			<path d="M11.2265 9.38394H2V18.6105H11.2265V9.38394Z" />
			<path d="M25.9891 9.38394H16.7626V18.6105H25.9891V9.38394Z" />
			<path d="M12.1115 13.9972L15.8775 13.9972" />
		</g>
	</svg>
)
export default CrossChain
