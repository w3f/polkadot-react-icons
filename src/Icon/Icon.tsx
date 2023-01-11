import * as React from 'react'
import keylineIcons from '../keyline/index.js'
import solidIcons from '../solid/index.js'

type Props =
	| {
			variant: 'keyline' | undefined
			name: keyof typeof keylineIcons
	  }
	| {
			variant: 'solid'
			name: keyof typeof solidIcons
	  }

const Icon = ({ name, variant }: Props) => {
	const Component =
		variant === 'solid' && solidIcons[name]
			? solidIcons[name]
			: keylineIcons[name]

	return <Component />
}
export default Icon
