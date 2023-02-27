import * as React from 'react'
import { SVGProps } from 'react'
const QrCode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.999973 10.055C0.999973 10.6073 1.44769 11.055 1.99997 11.055C2.55226 11.055 2.99997 10.6073 2.99997 10.055L2.99997 3.375L9.67997 3.375C10.2323 3.375 10.68 2.92729 10.68 2.375C10.68 1.82272 10.2323 1.375 9.67997 1.375H1.99997C1.44769 1.375 0.999974 1.82272 0.999974 2.375L0.999973 10.055ZM18.32 1.37503C17.7677 1.37503 17.32 1.82275 17.32 2.37503C17.32 2.92732 17.7677 3.37503 18.32 3.37503H25V10.055C25 10.6073 25.4477 11.055 26 11.055C26.5523 11.055 27 10.6073 27 10.055V2.37503C27 1.82275 26.5523 1.37503 26 1.37503H18.32ZM9.67994 27.375C10.2322 27.375 10.6799 26.9273 10.6799 26.375C10.6799 25.8228 10.2322 25.375 9.67994 25.375H2.99994L2.99994 17.735C2.99994 17.1827 2.55222 16.735 1.99994 16.735C1.44766 16.735 0.999939 17.1827 0.999939 17.735V26.375C0.999939 26.9273 1.44765 27.375 1.99994 27.375H9.67994ZM26 17.6951C26.5523 17.6951 27 18.1428 27 18.6951V26.3751C27 26.9274 26.5523 27.3751 26 27.3751H18.32C17.7677 27.3751 17.32 26.9274 17.32 26.3751C17.32 25.8228 17.7677 25.3751 18.32 25.3751L25 25.3751V18.6951C25 18.1428 25.4477 17.6951 26 17.6951ZM6.00006 5.375C5.44778 5.375 5.00006 5.82272 5.00006 6.375V12.375C5.00006 12.9273 5.44778 13.375 6.00006 13.375H12.0001C12.5523 13.375 13.0001 12.9273 13.0001 12.375V6.375C13.0001 5.82272 12.5523 5.375 12.0001 5.375H6.00006ZM16.0002 5.37502C15.4479 5.37502 15.0002 5.82273 15.0002 6.37502V12.375C15.0002 12.9273 15.4479 13.375 16.0002 13.375H22.0002C22.5525 13.375 23.0002 12.9273 23.0002 12.375V6.37502C23.0002 5.82273 22.5525 5.37502 22.0002 5.37502H16.0002ZM16.0002 15.375C15.4479 15.375 15.0002 15.8227 15.0002 16.375V22.375C15.0002 22.9273 15.4479 23.375 16.0002 23.375H22.0002C22.5525 23.375 23.0002 22.9273 23.0002 22.375V16.375C23.0002 15.8227 22.5525 15.375 22.0002 15.375H16.0002ZM6.00013 15.375C5.44785 15.375 5.00013 15.8227 5.00013 16.375V22.375C5.00013 22.9273 5.44785 23.375 6.00013 23.375H12.0001C12.5524 23.375 13.0001 22.9273 13.0001 22.375V16.375C13.0001 15.8227 12.5524 15.375 12.0001 15.375H6.00013Z"
			stroke="none"
		/>
	</svg>
)
export default QrCode
