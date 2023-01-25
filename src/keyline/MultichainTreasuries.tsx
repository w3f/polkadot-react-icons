import * as React from 'react'
import { SVGProps } from 'react'
const MultichainTreasuries = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M26 10.4352L23.2321 8.49051M2.00012 10.3376L4.54816 8.56634M23.2321 8.49051L13.994 2L4.54816 8.56634M23.2321 8.49051V26.0002H25.9999L2.00006 26.0002H4.54816L4.54816 8.56634" />
		<rect x={7.94513} y={18.2858} width={4.24641} height={4.28571} />
		<ellipse cx={17.7118} cy={12.7141} rx={2.12321} ry={2.14286} />
		<path d="M17.7118 18.2858L15.5886 22.5715H17.7118H19.835L17.7118 18.2858Z" />
		<path d="M10.0683 10.5713L7.94513 14.857H10.0683H12.1915L10.0683 10.5713Z" />
	</svg>
)
export default MultichainTreasuries
