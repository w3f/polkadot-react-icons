import * as React from 'react'
import { SVGProps } from 'react'
const Encryption = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M8.12128 9.66582L8.1213 7.41847V7.41847C8.1213 4.42593 10.5472 2 13.5398 2V2C16.5323 2 18.9582 4.42593 18.9582 7.41847V7.41847L18.9582 9.66582" />
		<path d="M24.0794 9.66956H3V25H24.0794V9.66956Z" />
		<path d="M9.59457 14.9474L6.78784 17.2887L9.5 19.5465" />
		<path d="M17.4755 19.6253L20.2916 17.284L17.5979 15.04" />
		<path d="M15.1113 12.5991L11.9587 21.9733" />
	</svg>
)
export default Encryption
