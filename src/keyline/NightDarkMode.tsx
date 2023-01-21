import * as React from 'react'
import { SVGProps } from 'react'
const NightDarkMode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M23.933 17.407C21.9658 19.0772 19.2425 19.7935 16.5563 19.0914C12.1808 17.9478 9.56086 13.4736 10.7045 9.09809C11.6333 5.54463 14.7587 3.14906 18.244 2.98694C17.5497 2.6436 16.8103 2.36531 16.0315 2.16175C9.8543 0.547169 3.53783 4.24589 1.92325 10.4231C0.308674 16.6002 4.00739 22.9167 10.1846 24.5313C15.9727 26.0442 21.8831 22.892 23.933 17.407Z" />
	</svg>
)
export default NightDarkMode
