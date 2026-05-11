import ClientEffects from '@/components/ClientEffects'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import NavCards from '@/components/NavCards'
import Identity from '@/components/Identity'
import LogosStrip from '@/components/LogosStrip'
import Work from '@/components/Work'
import Thinking from '@/components/Thinking'
import Perspectives from '@/components/Perspectives'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Nav />
      <Hero />
      <NavCards />
      <Identity />
      <LogosStrip />
      <Work />
      <Thinking />
      <Perspectives />
      <Connect />
      <Footer />
    </>
  )
}
