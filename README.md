# react-multi-level-nav

Style-less multi-level navigation bar component for React.

## Install

```sh
pnpm i react-multi-level-nav
```

## Usage

```tsx
import { MultiLevelNavbar, NavTree } from 'react-multi-level-nav'
import 'react-multi-level-nav/defaultStyles.css'

const tree: NavTree = {
  home: [<a>Showcase</a>, <a>Preview</a>],
  docs: [<a>Get started</a>]
}

const App = () => <MultiLevelNavbar tree={tree} className="nav" />
```
