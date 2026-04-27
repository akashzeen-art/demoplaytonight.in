import { useState } from 'react'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Disclaimer from './pages/Disclaimer'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'

export default function App() {
  const [page, setPage] = useState('home')

  const showPage = (p) => {
    setPage(p)
    window.scrollTo(0, 0)
  }

  const pages = { home: Home, checkout: Checkout, disclaimer: Disclaimer, terms: Terms, privacy: Privacy, refund: Refund }
  const Page = pages[page]

  return <Page showPage={showPage} />
}
