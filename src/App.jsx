import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import { icons } from './assets/icons'
import Header from './components/Header.jsx'
import Mockups from './components/Mockups.jsx'
import Clients from './components/Clients.jsx'
import Benefits from './components/Benefits.jsx'
import Process from './components/Process.jsx'

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
      <main>
        <Mockups />
        <Clients icons={icons} />
        <Benefits />
        <Process />
      </main>
    </>
  )
}

export default App
