///<reference path="./types/svg.d.ts" />
import React from 'react'
import Node from './icons/Node.svg'

export const NodeIcon = () => {
	return <div dangerouslySetInnerHTML={{ __html: Node.toString() }} />
}
