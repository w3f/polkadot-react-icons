import * as React from 'react'
import { SVGProps } from 'react'
const FundAccount = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
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
			d="M13.2933 0.970564C13.7222 0.675189 14.2892 0.676599 14.7165 0.974102L26.7143 9.32621C27.05 9.55991 27.2502 9.94307 27.2502 10.3521V10.4411C27.2502 11.1315 26.6905 11.6911 26.0002 11.6911H23.6494V24.499H25.9834C26.6737 24.499 27.2334 25.0587 27.2334 25.749C27.2334 26.4394 26.6737 26.999 25.9834 26.999H22.4052L22.3994 26.999L22.3936 26.999L5.60387 26.999L5.59839 26.999L5.5929 26.999H2C1.30964 26.999 0.75 26.4394 0.75 25.749C0.75 25.0587 1.30964 24.499 2 24.499H4.34839L4.34839 11.6911H2.01672C1.32637 11.6911 0.766724 11.1315 0.766724 10.4411V10.2555C0.766724 9.84426 0.968994 9.45933 1.30767 9.22606L13.2933 0.970564ZM6.84839 23.9758C7.24925 21.8151 8.84177 20.0222 11.013 19.406L10.977 19.3627C9.64466 17.7613 9.75127 15.4084 11.223 13.9338C12.7985 12.3554 15.357 12.3554 16.9325 13.9338C18.4044 15.4086 18.5108 17.7616 17.1782 19.363L17.1424 19.4061C19.0896 19.9574 20.573 21.4551 21.1494 23.3167V11.6911H6.84839L6.84839 23.9758Z"
		/>
	</svg>
)
export default FundAccount
