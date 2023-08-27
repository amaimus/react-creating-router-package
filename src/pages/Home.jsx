import { Link } from '../components/Link.jsx'

export default function Home () {
  return (
    <>
      <h1>Home</h1>
      <p>Example Home page of react-router</p>
      <Link to='/about'>Go to About</Link>
    </>
  )
}
