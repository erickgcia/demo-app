import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { landingMockup, landingMockup2, landingMockup3 } from './assets/images'
import { icons, quotes } from './assets/icons'
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
          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <section className="md:col-span-1 lg:col-span-2 flex flex-col h-bg w-full rounded-xl p-6 gap-8">
              <div className="flex flex-col gap-4">
                <strong className="font-semibold text-3xl">
                  Uniquely yours
                </strong>
                <p className="text-lg text-balance">
                  Every website is built from scratch bringing every design come
                  to life with amazing quality.
                </p>
              </div>
              <div className="w-1/2 self-end">
                <img src={landingMockup} alt="random" />
              </div>
            </section>
            <section className="md:col-span-1 flex flex-col w-full rounded-xl p-6 gap-4 bg-[#eef2f3]">
              <div className="flex flex-col gap-4">
                <div className="p-4">
                  <img className="w-full" src={landingMockup} alt="random" />
                </div>
                <strong className="font-semibold text-3xl">Simple plans</strong>
                <p className="text-lg text-balance">
                  No hidden fees, no surprises. Just choose the plan that&apos;s
                  right for you.
                </p>
              </div>
            </section>
            <section className="md:col-span-1 flex flex-col w-full rounded-xl p-6 gap-4 bg-[#eef2f3]">
              <div className="flex flex-col gap-4">
                <div className="p-4">
                  <img className="w-full" src={landingMockup} alt="random" />
                </div>
                <strong className="font-semibold text-3xl">
                  Top-notch quality
                </strong>
                <p className="text-lg text-balance">
                  Outstanding websites that are easy to navigate and engage your
                  audience.
                </p>
              </div>
            </section>
            <section className="md:col-span-1 lg:col-span-2 flex flex-col h-bg w-full rounded-xl p-6 gap-8">
              <div className="flex flex-col gap-4">
                <strong className="font-semibold text-3xl">
                  Fast delivery
                </strong>
                <p className="text-lg text-balance">
                  The designs are delivered to you within a few days without
                  compromising it&apos;s outcome.
                </p>
              </div>
              <div className="w-1/2 self-end">
                <img src={landingMockup} alt="random" />
              </div>
            </section>
          </article>
          <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            <div className="flex flex-col items-center justify-center py-6 px-1 border-t-4 w-full md:w-1/2 border-blue-400 gap-4">
              <strong className="font-semibold text-2xl">
                Reliable & efficient
              </strong>
              <p className="text-balance text-center text-md h-10">
                Have full rights to the design you receive, including the source
                files.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center py-6 px-1 border-t-4 w-full md:w-1/2 border-green-400 gap-4">
              <strong className="font-semibold text-2xl">
                Unlimited revisions
              </strong>
              <p className="text-balance text-center text-md h-10">
                Request as many revisions if it&apos;s needed.
              </p>
            </div>
          </section>
        </article>
        <article className="bg-[#242424] py-20">
          <article className="container-size grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4">
            <section className="col-span-1 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-gray-400 font-medium text-2xl">
                  Process
                </span>
                <h5 className="text-5xl font-bold text-white text-balance">
                  It&apos;s never been this easy.
                </h5>
              </div>
              <div className="flex flex-col gap-8">
                <p className="font-medium text-balance text-xl text-white">
                  Streamlined and hassle-free, just the way you like and always
                  wanted.
                </p>
                <button className="btn bg-[#fefefe] text-[#242424] text-lg font-bold w-fit">
                  Get Started
                </button>
              </div>
            </section>
            <section className="col-span-1 flex flex-col gap-4">
              <div className="flex flex-col justify-center gap-4 h-bg rounded-xl p-8 mb-6">
                <img className="w-1/3" src={landingMockup} alt="random" />
                <strong className="text-2xl font-semibold">
                  Subscribe & Request
                </strong>
                <p className="text-md">
                  Subscribe to a plan & request your website design through
                  dashboard.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 h-fit h-bg rounded-xl p-8">
                <img className="w-1/3" src={landingMockup} alt="random" />
                <strong className="text-2xl font-semibold">
                  Receive your design
                </strong>
                <p className="text-md">
                  Our initial design concept is quickly delivered to you within
                  just a few days.
                </p>
              </div>
            </section>
          </article>
          <article className="t-bg flex flex-col items-center justify-center w-[min(90%,1100px)] mx-auto h-[250px] p-12 border-2 border-dotted border-white rounded-xl my-16">
            <div className="relative flex flex-col gap-8">
              <img
                className="absolute top-[-30px] right-[-30px] w-14 z-10 opacity-20"
                src={quotes}
                alt="Quotation mark icon"
              />
              <p className="text-xl text-center font-medium text-white z-20 text-balance">
                Absolutely great to work with and delivers professional and
                creative work quickly.
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  className="rounded-full w-12 aspect-square"
                  src={landingMockup2}
                  alt="random"
                />
                <div className="flex flex-col">
                  <strong className="font-semibold text-white">Name</strong>
                  <span className="text-gray-300">President</span>
                </div>
              </div>
            </div>
          </article>
          <article className="container-size">
            <section className="flex flex-col items-center gap-14">
              <div className="flex flex-col gap-2">
                <span className="text-gray-400 font-medium text-2xl">
                  Process
                </span>
                <h5 className="text-5xl font-bold text-white text-balance">
                  Pixil perfect work and nothing else.
                </h5>
              </div>
              <button className="btn bg-[#fefefe] text-[#242424] text-lg font-bold w-fit">
                View recent works
              </button>
            </section>
            <section className="grid grid-cols-2 md:grid-cols-3 place-content-center gap-4 py-20">
              <div className="w-full rounded-xl h-full col-span-1 md:col-span-2 t-bg"></div>
              <div className="w-full rounded-xl aspect-square col-span-1 h-bg"></div>
              <div className="w-full rounded-xl aspect-square col-span-1 h-bg"></div>
              <div className="w-full rounded-xl aspect-square col-span-1 h-bg"></div>
              <div className="w-full rounded-xl aspect-square col-span-1 h-bg"></div>
              <div className="w-full rounded-xl col-span-1 md:col-span-2 t-bg"></div>
              <div className="w-full rounded-xl aspect-square col-span-1 h-bg"></div>
            </section>
          </article>
        </article>
      </main>
    </>
  )
}

export default App
