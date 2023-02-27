import * as React from 'react'
import { SVGProps } from 'react'
const ValueBearingToken = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M26 13.4443V16.7493C26 21.1676 20.6274 24.2493 14 24.2493C7.37258 24.2493 2 21.1676 2 16.7493V13.4443" />
		<path d="M14 20.7634C20.627 20.7634 26 17.1814 26 12.7634C26 8.34543 20.627 4.76343 14 4.76343C7.373 4.76343 2 8.34543 2 12.7634C2 17.1814 7.373 20.7634 14 20.7634Z" />
		<path d="M14 4.76343C12.935 4.76343 11.908 4.86543 10.924 5.03843V15.0144L13.998 13.6994L17.075 15.0074V5.03843C16.092 4.86443 15.065 4.76343 13.999 4.76343H14Z" />
	</svg>
)
export default ValueBearingToken
