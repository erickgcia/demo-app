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
      <header className="h-bg flex flex-col items-center justify-center p-8 w-full">
        <h1 className="text-xl font-semibold pb-8">MagicDesign UI</h1>
        <section className="container-size flex flex-col items-center justify-center gap-12 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-balance">
            Impressive custom websites just how you wanted it
          </h2>
          <h3 className="text-lg md:w-1/3 md:text-xl text-balace">
            Design your perfect unique website with unlimited revisions at a
            flat fee.
          </h3>
          <button className="btn bg-[#242424] text-white text-lg font-bold">
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
        <article className="container-size flex flex-col items-center justify-center gap-12 p-8 w-full">
          <span className="font-medium text-2xl text-balance">
            Trusted by companies worldwide
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 container-size border-dotted border-b-2 border-gray-400 pb-8">
            {icons.map((icon, index) => (
              <img
                className="g-logo w-[100px]"
                key={index}
                src={icon}
                alt={`${icon} icon`}
              />
            ))}
          </div>
        </article>
        <article className="container-size py-8 flex flex-col gap-12">
          <section className="mx-auto text-left">
            <span className="text-2xl text-gray-400">Benefits</span>
            <h4 className="text-5xl font-semibold py-4 text-pretty">
              Perks that you&apos;ll love
            </h4>
          </section>
          <article className="grid grid-cols-3 gap-6">
            <section className="col-span-2 flex flex-col h-bg w-full rounded-xl p-6 gap-4">
              <div className="flex flex-col gap-4">
                <strong className="font-semibold text-3xl">
                  Uniquely yours
                </strong>
                <p className="text-xl text-balance">
                  Every website is built from scratch bringing your designs come
                  to life.
                </p>
              </div>
              <div className="w-1/2 self-end">
                <img src={landingMockup} alt="random" />
              </div>
            </section>
            <section className="col-span-1 flex flex-col w-full rounded-xl p-6 gap-4 bg-[#eef2f3]">
              <div className="flex flex-col gap-4">
                <strong className="font-semibold text-3xl">
                  Uniquely yours
                </strong>
                <p className="text-xl text-balance">
                  Every website is built from scratch bringing your designs come
                  to life.
                </p>
              </div>
              <div className="w-1/2 self-end">
                <img src={landingMockup} alt="random" />
              </div>
            </section>
            <section className="col-span-1 flex flex-col w-full rounded-xl p-6 gap-4 bg-[#eef2f3]">
              <div className="flex flex-col gap-4">
                <strong className="font-semibold text-3xl">
                  Uniquely yours
                </strong>
                <p className="text-xl text-balance">
                  Every website is built from scratch bringing your designs come
                  to life.
                </p>
              </div>
              <div className="w-1/2 self-end">
                <img src={landingMockup} alt="random" />
              </div>
            </section>
            <section className="col-span-2 flex flex-col h-bg w-full rounded-xl p-6 gap-4">
              <div className="flex flex-col gap-4">
                <strong className="font-semibold text-3xl">
                  Uniquely yours
                </strong>
                <p className="text-xl text-balance">
                  Every website is built from scratch bringing your designs come
                  to life.
                </p>
              </div>
              <div className="w-1/2 self-end">
                <img src={landingMockup} alt="random" />
              </div>
            </section>
          </article>
        </article>
      </main>
    </>
  )
}

export default App
