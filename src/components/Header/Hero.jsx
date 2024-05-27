import MainButton from '../MainButton'
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Hero = () => {
  return (
    <section className="container-size flex flex-col items-center justify-center gap-12 text-center">
      <h2 className="text-4xl md:text-6xl font-semibold text-balance">
        Impressive custom websites just how you wanted it
      </h2>
      <h3 className="text-lg md:w-1/3 md:text-xl text-balace">
        Design your perfect unique website with unlimited revisions at a flat
        fee.
      </h3>
      <MainButton size="xl" textClr="white" color="black-500" />
    </section>
  )
}

export default Hero
