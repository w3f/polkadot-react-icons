import * as React from 'react'
import { SVGProps } from 'react'
const Blockchain = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={28}
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M11.2309 2H2V11.2309H11.2309V2Z" />
		<path d="M11.2308 16.7692H2V26H11.2308V16.7692Z" />
		<path d="M26.0001 2H16.7692V11.2309H26.0001V2Z" />
		<path d="M26 16.7692H16.7692V26H26V16.7692Z" />
		<path d="M11.3457 6.7023H16.7692" />
		<path d="M16.5569 21.534L11.3457 21.534" />
		<path d="M11.1746 16.8253L16.8262 11.1737" />
	</svg>
)
export default Blockchain
