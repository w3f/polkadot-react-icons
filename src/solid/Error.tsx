import * as React from 'react'
import { SVGProps } from 'react'
const Error = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.976562 13.6875C0.976562 20.8672 6.79686 26.6875 13.9766 26.6875C21.1563 26.6875 26.9766 20.8672 26.9766 13.6875C26.9766 6.5078 21.1563 0.6875 13.9766 0.6875C6.79686 0.6875 0.976562 6.5078 0.976562 13.6875ZM18.3356 18.0601C18.7282 17.6717 18.7316 17.0385 18.3432 16.6459L15.3923 13.6629L18.3736 10.7137C18.7662 10.3253 18.7696 9.69214 18.3812 9.29951C17.9928 8.90688 17.3597 8.90345 16.967 9.29186L13.9858 12.2411L11.0364 9.25962C10.648 8.86699 10.0149 8.86356 9.62223 9.25197C9.2296 9.64038 9.22617 10.2735 9.61458 10.6662L12.564 13.6476L9.58078 16.5987C9.18815 16.9871 9.18473 17.6202 9.57314 18.0129C9.96155 18.4055 10.5947 18.4089 10.9873 18.0205L13.9705 15.0694L16.9214 18.0524C17.3098 18.4451 17.943 18.4485 18.3356 18.0601Z"
		/>
	</svg>
)
export default Error
