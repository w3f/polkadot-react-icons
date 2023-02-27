import * as React from 'react'
import { SVGProps } from 'react'
const Article = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17 0.533203H5.19507C4.64278 0.533203 4.19507 0.980918 4.19507 1.5332V27.0057C4.19507 27.558 4.64278 28.0057 5.19507 28.0057H24.7893C25.3416 28.0057 25.7893 27.558 25.7893 27.0057V9.8155C25.6977 9.84313 25.6006 9.85798 25.5 9.85798H18C17.4477 9.85798 17 9.41027 17 8.85798V0.533203ZM25.6415 7.86791C25.6008 7.80169 25.5523 7.73992 25.4964 7.68408L19 1.18767V7.85798H25.5C25.548 7.85798 25.5953 7.86137 25.6415 7.86791ZM14.0125 4.45215C14.5647 4.45215 15.0125 4.89986 15.0125 5.45215V10.3507C15.0125 10.903 14.5647 11.3507 14.0125 11.3507H9.1139C8.56162 11.3507 8.1139 10.903 8.1139 10.3507V5.45215C8.1139 4.89986 8.56162 4.45215 9.1139 4.45215H14.0125ZM13.0125 6.45215H10.1139V9.35071H13.0125V6.45215ZM20.8704 18.209C21.4227 18.209 21.8704 17.7613 21.8704 17.209C21.8704 16.6567 21.4227 16.209 20.8704 16.209H9.11383C8.56155 16.209 8.11383 16.6567 8.11383 17.209C8.11383 17.7613 8.56155 18.209 9.11383 18.209H20.8704ZM21.8704 23.0869C21.8704 23.6392 21.4227 24.0869 20.8704 24.0869H9.11383C8.56155 24.0869 8.11383 23.6392 8.11383 23.0869C8.11383 22.5346 8.56155 22.0869 9.11383 22.0869H20.8704C21.4227 22.0869 21.8704 22.5346 21.8704 23.0869Z"
				stroke="none"
			/>
		</g>
	</svg>
)
export default Article
