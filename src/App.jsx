import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import { companies } from './assets/icons'
import Benefits from './components/Benefits/Benefits.jsx'
import Header from './components/Header/Header.jsx'
import Process from './components/Process/Process.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Mockups from './components/Mockups.jsx'
import Clients from './components/Clients.jsx'
import Questions from './components/Question/Questions.jsx'
import CallToAction from './components/CallToAction.jsx'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'

const App = () => {
  useGSAP(() => {
    gsap.to('.g-red', {
      scrollTrigger: {
        trigger: '.g-red',
        start: 'top center',
        toggleActions: 'play none none none',
        scrub: true,
      },
      x: 0,
      duration: 2,
      ease: 'power2.inOut',
    })

    gsap.to('.g-blue', {
      scrollTrigger: {
        trigger: '.g-blue',
        start: 'top center',
        toggleActions: 'play none none none',
        scrub: true,
      },
      y: 0,
      scale: 1,
      duration: 2,
      ease: 'power2.inOut',
    })

    gsap.to('.g-green', {
      scrollTrigger: {
        trigger: '.g-green',
        start: 'top center',
        toggleActions: 'play none none none',
        scrub: true,
      },
      xPercent: 0,
      duration: 2,
      ease: 'power2.inOut',
    })

    gsap.to('.g-logo', {
      scrollTrigger: {
        trigger: '.g-logo',
        start: '5% bottom',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Mockups />
        <Clients icons={companies} />
        <Benefits />
        <Process />
        <Pricing />
        <Questions />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
