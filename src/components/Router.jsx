import { useEffect, useState, Children } from 'react'
import { EVENTS } from '../../consts.js'
import { match } from 'path-to-regexp'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
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

  const routesToUse = routes.concat(routesFromChildren)

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
