import HomePage from './src/pages/Home.jsx'
import About from './src/pages/About.jsx'

export const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: About
  }
]

export const EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}
