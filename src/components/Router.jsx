import { useEffect, useState } from 'react'
import { EVENTS } from '../../consts.js'
import { match } from 'path-to-regexp'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
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

  const PageComponent = routes.find(({ path }) => {
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
