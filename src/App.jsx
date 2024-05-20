import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { landingMockup, landingMockup2, landingMockup3 } from './assets/images'
import { icons } from './assets/icons'
gsap.registerPlugin(ScrollTrigger)

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
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <>
      <header className="h-bg flex flex-col items-center justify-center p-8 w-full">
        <h1 className="text-2xl font-semibold">MagicDesign UI</h1>
        <section className="hero flex flex-col items-center justify-center gap-12 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-balance">
            Impressive custom websites just how you wanted it
          </h2>
          <h3 className="text-lg md:w-1/3 md:text-xl text-balace">
            Design your perfect unique website with unlimited revisions at a
            flat fee.
          </h3>
          <button className="btn bg-[#242424] text-white text-xl font-bold">
            Get Started
          </button>
        </section>
      </header>
      <main>
        <article className="flex items-center justify-center gap-8 p-12 md:p-8 w-full h-[400px]">
          <section className="g-red hidden sm:flex rounded-xl drop-shadow-lg">
            <img
              className="w-full p-6 object-cover object-center"
              src={landingMockup}
              alt="Landing mockup image"
            />
          </section>
          <section className="g-blue rounded-xl drop-shadow-lg">
            <img
              className="w-full p-6 object-cover object-center"
              src={landingMockup3}
              alt="Landing mockup image"
            />
          </section>
          <section className="g-green hidden sm:flex rounded-xl drop-shadow-lg">
            <img
              className="w-full p-6 object-cover object-center"
              src={landingMockup2}
              alt="Landing mockup image"
            />
          </section>
        </article>
        <article className="flex flex-col items-center justify-center gap-12 p-8 w-full">
          <span className="font-medium text-2xl">
            Trusted by companies worldwide
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 w-[50%] border-b border-black pb-8">
            {icons.map((icon, index) => (
              <img
                className="g-logo w-[110px]"
                key={index}
                src={icon}
                alt={`${icon} icon`}
              />
            ))}
          </div>
        </article>
      </main>
    </>
  )
}

export default App
