import * as React from 'react'
import { SVGProps } from 'react'
const Transaction = (props: SVGProps<SVGSVGElement>) => (
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
			d="M21.1858 2.24552C20.7952 1.855 20.1621 1.85501 19.7715 2.24554C19.381 2.63607 19.381 3.26923 19.7716 3.65975L23.5858 7.4739L2 7.4739C1.44771 7.4739 1 7.92161 1 8.4739C1 9.02618 1.44771 9.4739 2 9.4739L23.5887 9.4739L19.7709 13.2982C19.3808 13.689 19.3813 14.3222 19.7721 14.7124C20.163 15.1026 20.7962 15.102 21.1864 14.7112L26.7077 9.18041C27.0977 8.78978 27.0974 8.15708 26.7071 7.76679L21.1858 2.24552ZM8.22848 14.7071C8.61901 14.3166 8.61901 13.6834 8.22849 13.2929C7.83798 12.9024 7.20481 12.9024 6.81428 13.2929L1.2929 18.8141C0.902604 19.2044 0.902331 19.8371 1.29229 20.2277L6.81367 25.7585C7.20386 26.1494 7.83703 26.1499 8.22788 25.7597C8.61874 25.3695 8.61928 24.7364 8.22909 24.3455L4.41131 20.5212H25.9918C26.5441 20.5212 26.9918 20.0735 26.9918 19.5212C26.9918 18.969 26.5441 18.5212 25.9918 18.5212H4.41426L8.22848 14.7071Z"
			stroke="none"
		/>
	</svg>
)
export default Transaction
