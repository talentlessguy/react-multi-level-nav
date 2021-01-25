# react-multi-level-navbar

Style-less multi-level navigation bar component for React.

## Install

```sh
pnpm i react-multi-level-navbar
```

## Usage

```tsx
import { MultiLevelNavbar, NavTree } from 'react-multi-level-navbar'
import 'react-multi-level-navbar/defaultStyles.css'

const tree: NavTree = {
  home: [<a>Showcase</a>, <a>Preview</a>],
  docs: [<a>Get started</a>]
}

const App = () => <MultiLevelNavbar tree={tree} className="nav" />
```
