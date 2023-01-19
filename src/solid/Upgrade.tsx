import * as React from 'react'
import { SVGProps } from 'react'
const Upgrade = (props: SVGProps<SVGSVGElement>) => (
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
			d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM8.7666 8.17366C8.37608 8.56419 8.37608 9.19735 8.76661 9.58788C9.15713 9.9784 9.7903 9.9784 10.1808 9.58787L11.9998 7.76884V20.6452C11.9998 21.1975 12.4476 21.6452 12.9998 21.6452C13.5521 21.6452 13.9998 21.1975 13.9998 20.6452V7.76883L15.8189 9.58788C16.2094 9.9784 16.8426 9.9784 17.2331 9.58788C17.6236 9.19735 17.6236 8.56419 17.2331 8.17366L13.7069 4.64751C13.5194 4.45998 13.2651 4.35462 12.9998 4.35462C12.7346 4.35462 12.4803 4.45998 12.2927 4.64751L8.7666 8.17366Z"
		/>
	</svg>
)
export default Upgrade
