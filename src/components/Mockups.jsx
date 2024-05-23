import { landingMockup, landingMockup2, landingMockup3 } from '../assets/images'

const Mockups = () => {
  return (
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
  )
}

export default Mockups
