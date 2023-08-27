import { Link } from '../components/Link.jsx'

const i18n = {
  es: {
    title: 'Sobre mi',
    button: 'Ir a Home',
    description: 'Esta es la página de Sobre mi'
  },
  en: {
    title: 'About',
    button: 'Go to Home',
    description: 'This is the About page'
  }
}

const usei18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function About ({ routeParams }) {
  const i18n = usei18n(routeParams.lang) ?? 'en'

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
