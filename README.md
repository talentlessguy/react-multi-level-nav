# react-multi-level-nav

[![npm-badge]][npm-url] [![dl-badge]][npm-url]

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

[npm-badge]: https://img.shields.io/npm/v/react-multi-level-nav?style=flat-square&color=%234AB8F2
[dl-badge]: https://img.shields.io/npm/dt/react-multi-level-nav?style=flat-square&color=%234AB8F2
[npm-url]: https://npmjs.com/package/react-multi-level-nav
