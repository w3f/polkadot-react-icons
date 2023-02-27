import * as React from 'react'
import { SVGProps } from 'react'
const ExistentialDeposit = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M2 20.5V26H26V20.5" fill="none" data-nofill="true" />
		<circle cx={14} cy={12.5} r={8} />
		<path d="M15.7943 9.02179H13.4727C13.0158 9.02301 12.578 9.20551 12.2551 9.52934C11.9322 9.85317 11.7506 10.2919 11.75 10.7496V10.7704C11.7506 11.228 11.9322 11.6668 12.2551 11.9906C12.578 12.3145 13.0158 12.497 13.4727 12.4982H14.6243C14.8514 12.4973 15.0765 12.5413 15.2866 12.6277C15.4967 12.7141 15.6876 12.8413 15.8486 13.0018C16.0095 13.1623 16.1372 13.3531 16.2243 13.5632C16.3114 13.7733 16.3563 13.9985 16.3563 14.226C16.3569 14.4537 16.3125 14.6792 16.2258 14.8897C16.1391 15.1002 16.0117 15.2914 15.851 15.4524C15.6903 15.6134 15.4994 15.741 15.2892 15.8278C15.0791 15.9147 14.8539 15.959 14.6266 15.9584H12.1093" />
		<path d="M14.0488 8.97504V7.74445" />
		<path d="M14.0488 17.2556V16.1204" />
	</svg>
)
export default ExistentialDeposit
