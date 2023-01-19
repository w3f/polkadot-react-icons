import * as React from 'react'
import { SVGProps } from 'react'
const Youtube = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1 0H25C25.5523 0 26 0.447715 26 1V20C26 20.5523 25.5523 21 25 21H1C0.447716 21 0 20.5523 0 20V1C0 0.447715 0.447715 0 1 0ZM11.4669 5.41337C11.1576 5.23291 10.7754 5.2316 10.4649 5.40993C10.1544 5.58826 9.96289 5.91902 9.96289 6.2771V13.9771C9.96289 14.3351 10.1543 14.6659 10.4648 14.8442C10.7753 15.0226 11.1574 15.0213 11.4667 14.8409L18.0667 10.9918C18.3739 10.8127 18.5629 10.4838 18.5629 10.1281C18.5629 9.77245 18.3741 9.44353 18.0669 9.26429L11.4669 5.41337ZM11.9629 12.2363V8.01835L15.5783 10.1278L11.9629 12.2363Z"
		/>
	</svg>
)
export default Youtube
