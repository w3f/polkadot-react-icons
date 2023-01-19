import * as React from 'react'
import { SVGProps } from 'react'
const Time = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM13.8941 5.38759C13.8941 4.8353 13.4464 4.38759 12.8941 4.3876C12.3418 4.3876 11.8941 4.83532 11.8941 5.38761L11.8942 13.8363C11.8942 14.1966 12.088 14.529 12.4015 14.7065C12.715 14.884 13.0998 14.8792 13.4087 14.6938L17.9562 11.9655C18.4298 11.6814 18.5834 11.0671 18.2992 10.5935C18.0151 10.1199 17.4009 9.96634 16.9273 10.2505L13.8942 12.0702L13.8941 5.38759Z"
		/>
	</svg>
)
export default Time
