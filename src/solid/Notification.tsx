import * as React from 'react'
import { SVGProps } from 'react'
const Notification = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.0875 4.04395e-05C8.93474 -0.00705978 8.00022 0.921714 8.00022 2.07452V2.22979C4.54966 3.08365 2 6.09543 2 9.67981V20.8222H1C0.447715 20.8222 0 21.2699 0 21.8222C0 22.3745 0.447715 22.8222 1 22.8222H3.01335H8V23.708C8 24.8608 8.93451 25.8011 10.0873 25.8082C11.2401 25.8153 12.1746 24.8865 12.1746 23.7337V22.8222H16.8119L19.1233 22.8222C19.6756 22.8222 20.1233 22.3745 20.1233 21.8222C20.1233 21.2699 19.6756 20.8222 19.1233 20.8222H18V9.67981C18 6.15631 15.5362 3.18612 12.1748 2.27516V2.10023C12.1748 0.947426 11.2403 0.00714066 10.0875 4.04395e-05Z"
		/>
	</svg>
)
export default Notification
