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
