export const reactComponent = (name, rawSvg) => `
import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const ${name} = (props: Props) => (${rawSvg})
`;
