import { useEffect, useState } from 'react'
import { EVENTS } from '../consts.js'
import './App.css'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Example Home page of react-router</p>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </>
  )
}

function About () {
  return (
    <>
      <h1>About</h1>
      <p>Example About page of react-router</p>
      <button onClick={() => navigate('/home')}>Go to Home</button>
    </>
  )
}

function App () {
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

export default App
