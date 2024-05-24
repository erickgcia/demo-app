import ProcessCTA from './ProcessCTA'
import ProcessGrid from './ProcessGrid'
import Testimonials from '../Testimonials/Testimonials'
import { numbers } from '../../assets/icons'
import MainButton from '../MainButton'

const Process = () => {
  const [numOne, numTwo] = numbers
  return (
    <article className="bg-black-500 pt-20">
      <article className="container-size grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4">
        <section className="col-span-1 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-gray-400 font-medium text-2xl">Process</span>
            <h5 className="text-5xl font-bold text-white text-balance">
              It&apos;s never been this easy.
            </h5>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-medium text-balance text-xl text-white">
              Streamlined and hassle-free, just the way you like and always
              wanted.
            </p>
            <MainButton color="white-500" textClr="black-500" size="xl" />
          </div>
        </section>
        <section className="col-span-1 flex flex-col gap-4">
          <div className="flex flex-col justify-center gap-4 h-bg rounded-xl p-8 mb-6">
            <img className="w-20" src={numOne} alt="Number one icon" />
            <strong className="text-2xl font-semibold">
              Subscribe & Request
            </strong>
            <p className="text-md">
              Subscribe to a plan & request your website design through
              dashboard.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 h-fit h-bg rounded-xl p-8">
            <img className="w-20" src={numTwo} alt="Number two icon" />
            <strong className="text-2xl font-semibold">
              Receive your design
            </strong>
            <p className="text-md">
              Our initial design concept is quickly delivered to you within just
              a few days.
            </p>
          </div>
        </section>
      </article>
      <Testimonials />
      <article className="container-size">
        <ProcessCTA />
        <ProcessGrid />
      </article>
    </article>
  )
}

export default Process
