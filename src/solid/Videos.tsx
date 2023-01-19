import * as React from 'react'
import { SVGProps } from 'react'
const Videos = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 25"
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
			d="M6.13812 0.75C5.44777 0.75 4.88812 1.30964 4.88812 2V4.88794H4.15572L8.12818 8.86035H11.8106L7.64008 4.90721C7.63336 4.90084 7.62673 4.89442 7.62018 4.88794H7.38812V3.25H24.7502V18.2286H23.1121V11.3604H0.75V23.6166C0.75 24.3069 1.30964 24.8666 2 24.8666H21.8621C22.5524 24.8666 23.1121 24.3069 23.1121 23.6166V20.7286H26.0002C26.6905 20.7286 27.2502 20.169 27.2502 19.4786V2C27.2502 1.30964 26.6905 0.75 26.0002 0.75H6.13812ZM11.2538 4.88794H14.5115L18.3909 8.86035H15.4107C15.3645 8.79548 15.3114 8.7341 15.2514 8.67724L11.2538 4.88794ZM0.75 6.13794C0.75 5.82469 0.865227 5.53835 1.05561 5.31899C1.07487 5.34116 1.09504 5.36281 1.11612 5.38389L4.59262 8.86035H0.75V6.13794ZM23.1121 6.13794V8.86035H21.8752C21.8475 8.82519 21.8177 8.79116 21.7858 8.75844L18.0059 4.88794H21.8621C22.5524 4.88794 23.1121 5.44758 23.1121 6.13794ZM10.1496 12.1862C10.5561 11.9687 11.0493 11.9926 11.4329 12.2483L16.1998 15.427C16.5475 15.6589 16.7563 16.0492 16.7563 16.4672C16.7562 16.8851 16.5473 17.2754 16.1995 17.5072L11.4326 20.6843C11.0491 20.94 10.5559 20.9638 10.1495 20.7463C9.74308 20.5287 9.48938 20.1052 9.48938 19.6442V13.2883C9.48938 12.8273 9.74314 12.4037 10.1496 12.1862ZM11.9894 15.6243V17.3089L13.2528 16.4668L11.9894 15.6243Z"
		/>
	</svg>
)
export default Videos
