import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Intro from '../components/Intro'
import BannerBar from '../components/BannerBar'
import CtaBanner from '../components/CtaBanner'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import Product from '../components/Product'
import Ingredients from '../components/Ingredients'
import IngredientsTable from '../components/IngredientsTable'
import Extracts from '../components/Extracts'
import Footer from '../components/Footer'

export default function Home({ showPage }) {
  return (
    <>
      <Hero showPage={showPage} />
      <Stats />
      <Intro />
      <BannerBar />
      <CtaBanner showPage={showPage} />
      <Benefits />
      <Testimonials />
      <Product />
      <Ingredients />
      <IngredientsTable />
      <Extracts />
      <Footer showPage={showPage} />
    </>
  )
}
