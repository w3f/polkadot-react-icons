import * as React from 'react'
import { SVGProps } from 'react'
const Success = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1 14C1 6.8203 6.8203 1 14 1C21.1797 1 27 6.8203 27 14C27 21.1797 21.1797 27 14 27C6.8203 27 1 21.1797 1 14ZM20.4659 10.7871C20.8542 10.3943 20.8506 9.76116 20.4579 9.37287C20.0651 8.98457 19.432 8.98817 19.0437 9.38091L13.1143 15.3781L10.2165 12.6715C9.81291 12.2946 9.18011 12.3162 8.80313 12.7198C8.42615 13.1234 8.44774 13.7562 8.85135 14.1332L12.4595 17.5032C12.855 17.8726 13.4727 17.8603 13.8532 17.4755L20.4659 10.7871Z"
			stroke="none"
		/>
	</svg>
)
export default Success
