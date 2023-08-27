import HomePage from './src/pages/Home.jsx'
import AboutPage from './src/pages/About.jsx'

export const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  }
]

export const EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}
