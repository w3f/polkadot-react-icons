import * as React from 'react'
import { SVGProps } from 'react'
const ImportToken = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={20}
		viewBox="0 0 28 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M10.0002 1.90186H26.0002V17.9019H10.0002" />
		<circle cx={10} cy={9.90173} r={8} />
		<path d="M10.7999 9.90161H17.1999" />
		<path d="M10.7999 5.90186H16.3999" />
		<path d="M10.7999 13.9017H16.3999" />
		<path d="M10.0002 1.90186V17.9019" />
	</svg>
)
export default ImportToken
