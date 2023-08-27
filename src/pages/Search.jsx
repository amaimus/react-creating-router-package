import { useEffect } from 'react'
import { Link } from '../components/Link.jsx'

export default function Search ({ routeParams }) {
  useEffect(() => {
    document.title = `You searched ${routeParams.query}`
  }, [routeParams])

  return (
    <>
      <h1>Search Page: {routeParams.query}!</h1>
      <Link to='/'>Go to Home</Link>
    </>
  )
}
