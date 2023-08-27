import AboutPage from './src/pages/About.jsx'
import SearchPage from './src/pages/Search.jsx'

export const routes = [
  {
    path: '/:lang/about',
    component: AboutPage
  },
  {
    path: '/search/:query',
    component: SearchPage
  }
]
