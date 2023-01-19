import * as React from 'react'
import { SVGProps } from 'react'
const EditOn = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16.5009 1.11612C16.9891 0.627961 17.7805 0.627961 18.2687 1.11612L23.6309 6.47834C24.119 6.9665 24.119 7.75796 23.6309 8.24611L20.6847 11.1923L13.5547 4.06235L16.5009 1.11612ZM11.7869 5.83012L2.49345 15.1236C2.33051 15.2865 2.21577 15.4913 2.16193 15.7154L0.465719 22.7738C0.364075 23.1968 0.489636 23.6422 0.797233 23.9498C1.10483 24.2574 1.55022 24.3829 1.97319 24.2813L9.03163 22.5851C9.25568 22.5312 9.4605 22.4165 9.62344 22.2536L18.9169 12.9601L11.7869 5.83012Z"
		/>
	</svg>
)
export default EditOn
