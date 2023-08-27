import { useEffect, useState } from 'react'
import { EVENTS } from '../consts.js'
import './App.css'
import HomePage from './pages/Home.jsx'
import About from './pages/About.jsx'

export default function App () {
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

  return (
    <>
      <h1>New react-router</h1>
      <main>
        {currentPath === '/home' && <HomePage />}
        {currentPath === '/about' && <About />}
      </main>
    </>
  )
}
