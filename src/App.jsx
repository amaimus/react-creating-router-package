import './App.css'

import { Router } from './components/Router.jsx'

import { routes } from '../consts.js'

export default function App () {
  return (
    <>
      <h1>New react-router</h1>
      <main>
        <Router routes={routes} />
      </main>
    </>
  )
}
