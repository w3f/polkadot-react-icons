import * as React from 'react'
import { SVGProps } from 'react'
const VestingPeriod = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8.45123 1C8.45123 0.447715 8.00352 0 7.45123 0C6.89895 0 6.45123 0.447715 6.45123 1V3.55856H1.00011C0.44783 3.55856 0.000115681 4.00627 0.000112615 4.55855L0 24.8442C-3.60322e-06 25.3965 0.447713 25.8442 1 25.8442L25 25.8442C25.5523 25.8442 26 25.3965 26 24.8442V4.55856C26 4.00627 25.5523 3.55856 25 3.55856H19.5941V1C19.5941 0.447715 19.1464 0 18.5941 0C18.0418 0 17.5941 0.447715 17.5941 1V3.55856L8.45123 3.55856V1ZM9.13902 11.0585C9.13902 8.92225 10.8708 7.19051 13.007 7.19051C15.1432 7.19051 16.875 8.92226 16.875 11.0585L16.875 11.2497H18.5858C19.1381 11.2497 19.5858 11.6974 19.5858 12.2497V20.3641C19.5858 20.9163 19.1381 21.3641 18.5858 21.3641H7.42856C6.87627 21.3641 6.42856 20.9163 6.42856 20.3641V12.2497C6.42856 11.6974 6.87627 11.2497 7.42856 11.2497H9.13901L9.13902 11.0585V11.0585ZM14.875 11.0585L14.875 11.2497H11.139L11.139 11.0585V11.0585C11.139 10.0268 11.9753 9.19051 13.007 9.19051C14.0386 9.19051 14.875 10.0268 14.875 11.0585V11.0585ZM8.42856 13.2497V19.3641H17.5858V13.2497H8.42856Z"
		/>
	</svg>
)
export default VestingPeriod
