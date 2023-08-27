import { useEffect, useState, Children } from 'react'
import { EVENTS } from '../../consts.js'
import { match } from 'path-to-regexp'
import { getCurrentPath } from '../utils/getCurrentPath.js'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    if (!isRoute) return null

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  // const PageComponent = routesToUSe.find(({ path }
  const PageComponent = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    const matchedUrl = match(path, { decode: decodeURIComponent })
    const matched = matchedUrl(currentPath)

    if (!matched) return false

    routeParams = matched.params

    return true
  })?.component

  return (
    <>
      {PageComponent ? <PageComponent routeParams={routeParams}/> : <DefaultComponent /> }
    </>
  )
}
