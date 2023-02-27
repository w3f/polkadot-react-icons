import * as React from 'react'
import { SVGProps } from 'react'
const AccountPortability = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M8 13.7644L2 13.7644" />
		<path d="M6.16985 16.6807L9.08611 13.7643L6.16985 10.848" fill="none" />
		<path d="M19.6117 14.6402L20.3804 13.716C21.6924 12.1387 21.5873 9.82174 20.1379 8.36968C18.5861 6.81497 16.067 6.81497 14.5152 8.36968C13.0658 9.82174 12.9608 12.1387 14.2727 13.716L15.0413 14.64C15.5323 15.2302 15.251 16.1304 14.5113 16.3361L13.47 16.6257C10.6189 17.4185 8.64612 20.0149 8.64612 22.9741V25.8286H26V22.9692C26 20.0124 24.0291 17.4182 21.1806 16.6255L20.1415 16.3363C19.402 16.1305 19.1208 15.2304 19.6117 14.6402Z" />
	</svg>
)
export default AccountPortability
