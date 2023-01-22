import * as React from 'react'
import { SVGProps } from 'react'
const NightDarkMode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M24.933 18.407C22.9658 20.0772 20.2425 20.7935 17.5563 20.0914C13.1808 18.9478 10.5609 14.4736 11.7045 10.0981C12.6333 6.54463 15.7587 4.14906 19.244 3.98694C18.5497 3.6436 17.8103 3.36531 17.0315 3.16175C10.8543 1.54717 4.53783 5.24589 2.92325 11.4231C1.30867 17.6002 5.00739 23.9167 11.1846 25.5313C16.9727 27.0442 22.8831 23.892 24.933 18.407Z" />
	</svg>
)
export default NightDarkMode
