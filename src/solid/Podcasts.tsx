import * as React from 'react'
import { SVGProps } from 'react'
const Podcasts = (props: SVGProps<SVGSVGElement>) => (
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
		<g>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.2577 1.30511C17.5893 0.619662 15.802 0.270265 13.9983 0.27695C10.3601 0.277432 6.87014 1.71934 4.29252 4.28708C1.71444 6.85528 0.259077 10.3404 0.245135 13.9794L0.245129 13.9819C0.242557 15.9799 0.676609 17.9411 1.50208 19.7334C1.66922 20.0963 1.85242 20.4523 2.05128 20.8003C2.32532 21.2798 2.93618 21.4464 3.41568 21.1723C3.89519 20.8983 4.06176 20.2874 3.78773 19.8079C3.61789 19.5107 3.46143 19.2067 3.31868 18.8968C2.61381 17.3663 2.24312 15.6918 2.24513 13.9858C2.25737 10.8764 3.50108 7.8985 5.70401 5.70401C7.90724 3.50922 10.8904 2.27693 14.0002 2.27695L14.0041 2.27694C14.7449 2.27409 15.4824 2.34157 16.207 2.47746L25.5467 11.7827C25.6852 12.5062 25.7554 13.243 25.7554 13.9832V13.9845C25.758 16.0365 25.2215 18.0429 24.2128 19.8079C23.9387 20.2874 24.1053 20.8983 24.5848 21.1723C25.0643 21.4464 25.6752 21.2798 25.9492 20.8003C27.13 18.7341 27.7582 16.3854 27.7554 13.9832L25.5467 11.7827C25.5466 11.7823 25.5465 11.7818 25.5465 11.7814L27.7554 13.9819C27.7552 12.178 27.399 10.3918 26.707 8.72585C26.0149 7.05948 25.0006 5.54617 23.7223 4.27274C22.444 2.9993 20.9268 1.99081 19.2577 1.30511ZM25.5465 11.7814L16.2073 2.47751C16.99 2.62432 17.7575 2.85098 18.4977 3.15507C19.9232 3.74071 21.219 4.60205 22.3108 5.68966C23.4026 6.77728 24.2689 8.06977 24.86 9.49298C25.167 10.2322 25.3966 10.999 25.5465 11.7814ZM16.2073 2.47751L13.9983 0.27695L16.207 2.47746C16.2071 2.47748 16.2072 2.47749 16.2073 2.47751ZM14.042 4.32333C12.7706 4.31789 11.5106 4.5635 10.3342 5.04609C9.15722 5.52897 8.08717 6.2396 7.18555 7.13717C6.28393 8.03473 5.56848 9.10156 5.0803 10.2764C4.59213 11.4512 4.34084 12.7109 4.34086 13.9831H4.34082L4.34089 13.9916C4.35193 15.2884 4.62553 16.5672 5.14258 17.7515C5.36356 18.2576 5.95301 18.4888 6.45916 18.2678C6.96531 18.0468 7.19648 17.4574 6.97551 16.9512C6.56673 16.0149 6.35016 15.0041 6.34086 13.9789C6.34141 12.9715 6.54065 11.9741 6.9272 11.0438C7.3143 10.1122 7.88162 9.2663 8.59657 8.55456C9.31152 7.84283 10.16 7.27934 11.0933 6.89643C12.0267 6.51353 13.0264 6.31877 14.0352 6.32332V6.32333H14.0397C16.0723 6.32333 18.0218 7.13019 19.4599 8.56664C20.8968 10.0019 21.7057 11.9485 21.7093 13.9793C21.6997 15.0037 21.4833 16.0137 21.0753 16.9494C20.8546 17.4556 21.0861 18.045 21.5923 18.2657C22.0986 18.4865 22.6879 18.255 22.9086 17.7488C23.4247 16.5652 23.6979 15.2876 23.7093 13.9919H23.7093L23.7093 13.982C23.7064 11.4194 22.6864 8.96267 20.8733 7.15163C19.0608 5.34112 16.6038 4.32393 14.042 4.32333Z"
				stroke="none"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.6842 10.4036C15.6485 8.36416 12.344 8.36416 10.3083 10.4036C8.40704 12.3084 8.26919 15.3478 9.99025 17.4169L10.8051 18.3966C10.8616 18.4645 10.8293 18.5681 10.7442 18.5917L11.0123 19.5551L10.7442 18.5917L9.64268 18.8983C6.19051 19.859 3.802 23.003 3.802 26.5863V26.6778C3.802 27.2301 4.24972 27.6778 4.802 27.6778H23.198C23.7503 27.6778 24.198 27.2301 24.198 26.6778V26.5916C24.198 23.0055 21.8073 19.8592 18.3524 18.8984L17.2485 18.5915C17.1635 18.5678 17.1311 18.4643 17.1876 18.3964L18.0023 17.4169C19.7234 15.3478 19.5855 12.3084 17.6842 10.4036Z"
				stroke="none"
			/>
		</g>
	</svg>
)
export default Podcasts
