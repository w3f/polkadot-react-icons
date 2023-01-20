import * as React from 'react'
import { SVGProps } from 'react'
const ExistentialDeposit = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2 17.5V23H26V17.5"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<circle cx={14} cy={9.5} r={8} stroke="black" strokeWidth={2.5} />
		<path
			d="M15.7943 6.02179H13.4727C13.0158 6.02301 12.578 6.20551 12.2551 6.52934C11.9322 6.85317 11.7506 7.29195 11.75 7.74961V7.77037C11.7506 8.22803 11.9322 8.6668 12.2551 8.99063C12.578 9.31446 13.0158 9.49697 13.4727 9.49819H14.6243C14.8514 9.49728 15.0765 9.54129 15.2866 9.62772C15.4967 9.71414 15.6876 9.84127 15.8486 10.0018C16.0095 10.1623 16.1372 10.3531 16.2243 10.5632C16.3114 10.7733 16.3563 10.9985 16.3563 11.226C16.3569 11.4537 16.3125 11.6792 16.2258 11.8897C16.1391 12.1002 16.0117 12.2914 15.851 12.4524C15.6903 12.6134 15.4994 12.741 15.2892 12.8278C15.0791 12.9147 14.8539 12.959 14.6266 12.9584H12.1093"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M14.0488 5.97504V4.74445" stroke="black" strokeWidth={2.5} />
		<path d="M14.0488 14.2556V13.1204" stroke="black" strokeWidth={2.5} />
	</svg>
)
export default ExistentialDeposit
