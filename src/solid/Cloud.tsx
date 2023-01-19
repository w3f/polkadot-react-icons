import * as React from 'react'
import { SVGProps } from 'react'
const Cloud = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8.06277 20.4935H21.449C21.4892 20.4974 21.5299 20.4994 21.5711 20.4994C22.9006 20.4994 24.6141 20.1839 25.885 18.913C28.0294 16.7686 28.0294 13.2919 25.885 11.1475C25.2323 10.4948 24.4549 10.0405 23.6297 9.78505C23.7912 8.0519 23.7636 5.93883 22.4685 4.08427C19.9573 0.488405 14.9719 -0.304775 11.3495 2.22496C10.6366 2.7228 9.89779 3.48407 9.3145 4.30297C8.98133 4.7707 8.66157 5.30933 8.43117 5.87715C8.30906 5.87108 8.18624 5.86801 8.06277 5.86801C4.02404 5.86801 0.75 9.14204 0.75 13.1808C0.75 17.2195 4.02404 20.4935 8.06277 20.4935Z"
		/>
	</svg>
)
export default Cloud
