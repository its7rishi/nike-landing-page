import { useState } from 'react'
import Nav from './components/Nav'
import SideMenu from './components/SideMenu'
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from './sections/index'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="relative">
      <Nav setMenuOpen={setMenuOpen} />
      {menuOpen && <SideMenu setMenuOpen={setMenuOpen} />}
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}
export default App
