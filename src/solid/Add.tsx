import * as React from 'react'
import { SVGProps } from 'react'
const Add = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M22.9991 8.00464V2.00464" stroke="black" strokeWidth={2.5} />
		<path
			d="M25.9991 5.00464L19.9991 5.00464"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16.4629 4.44665C14.1389 2.11837 10.3664 2.11837 8.04246 4.44665C5.87192 6.62122 5.71455 10.091 7.67934 12.4531L8.58865 13.5463L8.58923 13.547L8.58897 13.5479L8.58868 13.5488L8.58779 13.5491L8.58812 13.5502L8.58779 13.5491L7.35865 13.8911C3.44846 14.9793 0.743042 18.5404 0.743042 22.5992V25.9816C0.743042 26.6719 1.30269 27.2316 1.99304 27.2316H22.5206C23.211 27.2316 23.7706 26.6719 23.7706 25.9816V22.6051C23.7706 18.5432 21.0628 14.9796 17.1494 13.8913L15.9177 13.5487L15.9169 13.5485L15.9166 13.5476L15.9163 13.5468L15.9169 13.5461L16.826 12.4531C18.7908 10.091 18.6334 6.62122 16.4629 4.44665Z"
		/>
	</svg>
)
export default Add
