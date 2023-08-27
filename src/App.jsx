import './App.css'

import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'
import NotFoundPage from './pages/NotFound.jsx'
import { routes } from '../routes'

import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

export default function App () {
  return (
    <>
      <h1>New react-router</h1>
      <main>
        <Router routes={routes} defaultComponent={NotFoundPage}>
          <Route path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
        </Router>
      </main>
    </>
  )
}
