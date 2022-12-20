# Polkadot React Icons

This package contains two different icon sets ("keyline" and "solid") specifically for Polkadot and other blockchain or crypto-related projects. Additionally, the "keyline" icons can also be styled as "two colour".

## Installation

In any React project, you can install this package from npm:

```bash
# Install with npm, Yarn or pnpm
npm install @nixstrom/polkadot-react-icons

yarn add @nixstrom/polkadot-react-icons

pnpm add @nixstrom/polkadot-react-icons
```

## How to use

The icons can be imported directly from either the `keyline` or `solid` subdirectory, then used as regular React components

```jsx
import Language from '@nixstrom/polkadot-reeact-icons/keyline/Language'
import SmartContract from '@nixstrom/polkadot-reeact-icons/solid/SmartContract'

const MyComponent = () => (
	<div>
		Hello, World!
		<Language />
		<SmartContract />
	</div>
)
```

The components accepts the same props as you can expect on any other SVG component.

```jsx
<Share aria-hidden="true" focusable="false" className="share-button" />
```

## Contributing

There are two icon sets – "keyline" and "solid". There is an additional "two color" icon set, which simply uses the keyline icons with different fill- and stroke colours.

### Generating icons

All icons reside in `src/icons` as SVGs, but theey need to be transformed into TSX components. This can be done by running:

```bash
pnpm generate
```

This will now generate a TSX file for each component, separated into solid and keyline directories.

### Building

The TSX components will neeed to be transpiled for consumers of the library. This is done by running:

```bash
pnpm build
```

This will first clean any old files, then transpile all TSX components to JS (with type declaration files) in the `lib` folder.

### Publishing

The final step is to publish. First you need to update the version number in `package.json`, then go into `lib/` and run:

```bash
pnpm publish
```

This will publish both icon sets in the same package.

### Important note about two-colour icons

Some icons needs special treatment in order to work properly in two-colour mode. With keyline and solid icons, we simply colour all paths, circles and rectangles indiscriminately. With two-colour icons, however, we need to be selective with which nodes we want to apply colour. These nodes have a `data-nofill` attribute applied. This is a manual process, and it will need to be redone when importing a new SVG from Figma.
