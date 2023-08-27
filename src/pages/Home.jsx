import { Link } from '../components/Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Example Home page of react-router</p>
      <Link to='/about'>Go to About</Link>
    </>
  )
}
