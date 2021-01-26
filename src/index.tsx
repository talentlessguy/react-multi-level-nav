import * as React from 'react'
import { PropsWithChildren, useState, useEffect } from 'react'

export interface NavTree<T = any> {
  [section: string]: T[] | T
}

export type MultilevelNavbarProps<T = any> = PropsWithChildren<{
  tree: NavTree<T>
  className: string
  preChildren: any
  postChildren: any
}>

const NavItem = ({ title, items, classPrefix }: { title: string; items: any[]; classPrefix: string }) => {
  const [vis, set] = useState(false)

  useEffect(() => void set(false), [])

  return (
    <div className={classPrefix + '_item'} onBlur={() => set(false)}>
      {Array.isArray(items) ? (
        <>
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
        </>
      ) : (
        items
      )}
    </div>
  )
}

export const MultiLevelNavbar = ({
  tree,
  className = 'nav',
  preChildren,
  postChildren,
  ...props
}: MultilevelNavbarProps) => {
  return (
    <nav {...props} className={className}>
      {preChildren}
      <div className={className + '_container'}>
        {Object.entries(tree).map(([k, v]) => (
          <NavItem classPrefix={className} title={k} items={v} />
        ))}
      </div>
      {postChildren}
    </nav>
  )
}
