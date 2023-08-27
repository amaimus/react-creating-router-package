import './App.css'
import { lazy, Suspense } from 'react'

import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'
import { routes } from '../routes'

import HomePage from './pages/Home.jsx'

const AboutPage = lazy(() => import('./pages/About.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFound.jsx'))

export default function App () {
  return (
    <>
      <h1>New react-router</h1>
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Router routes={routes} defaultComponent={NotFoundPage}>
            <Route path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
          </Router>
        </Suspense>
      </main>
    </>
  )
}
