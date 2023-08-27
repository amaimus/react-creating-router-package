import HomePage from './src/pages/Home.jsx'
import AboutPage from './src/pages/About.jsx'
import SearchPage from './src/pages/Search.jsx'

export const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/search/:query',
    component: SearchPage
  }
]
