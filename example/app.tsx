import { render } from 'react-dom'
import './style.css'

import * as React from 'react'
import { PropsWithChildren, useState, useEffect } from 'react'

export interface NavTree<T = any> {
  [section: string]: T[]
}

export type MultilevelNavbarProps<T = any> = PropsWithChildren<{ tree: NavTree<T>; className: string }>

const NavItem = ({ title, items, classPrefix }: { title: string; items: any[]; classPrefix: string }) => {
  const [vis, set] = useState(false)

  useEffect(() => void set(false), [])

  return (
    <div className={classPrefix + '_item'} onBlur={() => set(false)}>
      <button className={classPrefix + '_title'} onClick={() => set(!vis)}>
        {title}
      </button>
      <ul
        key={title}
        className={`${classPrefix}_list ${classPrefix}_${vis ? 'multilevel_visible' : 'multilevel_hidden'}`}
      >
        {items.map((v, i) => (
          <li className={classPrefix + '_list_item'} key={i}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const MultiLevelNavbar = ({ tree, className = 'nav', ...props }: MultilevelNavbarProps) => {
  return (
    <nav {...props} className={className}>
      <div className={className + '_container'}>
        {Object.entries(tree).map(([k, v]) => (
          <NavItem classPrefix={className} title={k} items={v} />
        ))}
      </div>
    </nav>
  )
}

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
