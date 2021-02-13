import Navbar from './navbar/Navbar'
import Hero from './hero/HeroMain'
import Footer from './footer/FooterMain'
import Reveal from './whenTimerFinishes/Reveal'
import { hasDateHappened } from '../config/dateChange'

export default function Main() {
  return (
    <>
      <Navbar />
      {hasDateHappened() ? <Reveal /> : <Hero />}
      {/* <Hero /> */}
      <Footer />
      {/* <Reveal /> */}
    </>
  )
}
