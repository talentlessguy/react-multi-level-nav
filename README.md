# react-multi-level-nav

Mmulti-level navigation bar component for React.

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

## Demo

[![compassionate-feather-95tgk](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/compassionate-feather-95tgk)
