import * as React from 'react'
import { SVGProps } from 'react'
const Unbond = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 17 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M15.5726 6.52721C15.5726 9.02776 12.5323 11.0549 8.78102 11.0549C5.09706 11.0549 2.10583 9.09799 2 6.65902V10.0861C2 12.5866 5.0403 14.6138 8.7916 14.6138C12.5429 14.6138 15.5832 12.5866 15.5832 10.0861C15.5832 9.77725 15.6621 6.81873 15.5736 6.52625L15.5726 6.52721Z"
			stroke="black"
		/>
		<path
			d="M8.80781 11.0555C12.5581 11.0555 15.5994 9.02828 15.5994 6.52773C15.5994 4.02719 12.5591 2 8.80781 2C5.0565 2 2.0162 4.02719 2.0162 6.52773C2.0162 9.02828 5.0565 11.0555 8.80781 11.0555Z"
			stroke="black"
		/>
		<path
			d="M8.80803 18.3212L8.80803 25M12.5093 22.2988L8.80811 26L5.10689 22.2988"
			stroke="black"
			strokeMiterlimit={10}
			fill="none"
		/>
	</svg>
)
export default Unbond
