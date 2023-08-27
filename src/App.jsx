import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Pagina Home ejemplo de React Router</p>
      <a href='/about'>About</a>
    </>
  )
}

function About () {
  return (
    <>
      <h1>About</h1>
      <p>Pagina About de ejemplo de React Router</p>
      <a href='/home'>Home</a>
    </>
  )
}

function App () {
  const [currentPath] = useState(window.location.pathname)

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
