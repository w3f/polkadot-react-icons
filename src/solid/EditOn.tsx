import * as React from 'react'
import { SVGProps } from 'react'
const EditOn = (props: SVGProps<SVGSVGElement>) => (
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
			d="M18.6777 2.29289C19.0682 1.90237 19.7014 1.90237 20.0919 2.29289L25.4541 7.65512C25.8446 8.04564 25.8446 8.67881 25.4541 9.06933L22.331 12.1924L15.5546 5.41592L18.6777 2.29289ZM14.1404 6.83013L4.67022 16.3003C4.53987 16.4307 4.44808 16.5945 4.40501 16.7738L2.70879 23.8322C2.62748 24.1706 2.72793 24.5269 2.97401 24.773C3.22008 25.0191 3.5764 25.1195 3.91477 25.0382L10.9732 23.342C11.1525 23.2989 11.3163 23.2071 11.4467 23.0768L20.9168 13.6066L14.1404 6.83013Z"
			stroke="none"
		/>
	</svg>
)
export default EditOn
