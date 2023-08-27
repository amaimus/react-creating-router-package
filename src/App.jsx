import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(NAVIGATION_EVENT)
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
    const onLocalChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocalChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocalChange)
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
