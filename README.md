# react-multi-level-navbar

Style-less multi-level navigation bar component for React. Doesn't depend on any CSS-in-JS library, neither uses Sass.

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

## Demo

**React code**

```js
import * as React from 'react'
import { render } from 'react-dom'
import { MultiLevelNavbar } from '../src'
import './style.css'

render(
  <>
    <MultiLevelNavbar
      className="nav"
      tree={{
        products: [<a href="/computers">Computers</a>, <a href="/tablets">Tablets</a>],
        about: [<a href="/somewhere">about1</a>]
      }}
    />
    <pre>
      {`  <MultiLevelNavbar
      className="nav"
      tree={{
        products: [<a href="/computers">Computers</a>, <a href="/tablets">Tablets</a>],
        about: [<a href="/somewhere">about1</a>]
      }}
    />`}
    </pre>
  </>,
  document.getElementById('app')
)
```

**Styles**

```css
body {
  margin: 0;
}
* {
  font-family: 'Inter', sans-serif;
}

.nav {
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  background: pink;
}

.nav_container {
  position: relative;
  display: flex;
  flex-direction: row;
}

.nav_multilevel_hidden {
  opacity: 0;
  visibility: hidden;
}

.nav_multilevel_visible {
  opacity: 1;
  visibility: visible;
}

.nav ul {
  position: absolute;
  transition: 0.3s;
}

.nav_title {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 2px 14px;
  outline: none;
  font-weight: bold;
}

.nav_list_item,
.nav_list_item * {
  line-height: 1.5;
  color: white;
  text-decoration: none;
}

.nav_list_item a:hover {
  text-decoration: underline;
}

.nav_list {
  margin-left: 14px;
  padding: 1rem;
  list-style-type: none;
  background-color: black;
}

pre {
  font-family: 'Fira Code', monospace;
  padding: 2rem;
}
```

![](https://i.ibb.co/1T4kvn4/image.png)
