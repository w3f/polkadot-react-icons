import * as React from 'react'
import { SVGProps } from 'react'
const MultichainTreasuries = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={28}
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M26 10.4352L13.9939 2L2.00006 10.3376" />
		<rect x={7.94513} y={18.2858} width={4.24641} height={4.28571} />
		<ellipse
			cx={17.7118}
			cy={12.7141}
			rx={2.12321}
			ry={2.14286}
			stroke="black"
			strokeWidth={2.5}
		/>
		<path d="M17.7118 18.2858L15.5886 22.5715H17.7118H19.835L17.7118 18.2858Z" />
		<path d="M10.0683 10.5713L7.94513 14.857H10.0683H12.1915L10.0683 10.5713Z" />
		<path d="M2 26.0002L25.9998 26.0002" />
		<path d="M4.5481 8.85706L4.5481 25.1428" />
		<path d="M23.2321 8.85706L23.2321 25.1428" />
	</svg>
)
export default MultichainTreasuries
