import { quotes } from '../assets/icons'

const Testimonials = () => {
  return (
    <article className="t-bg flex flex-col items-center justify-center w-[min(90%,1100px)] mx-auto h-[250px] p-12 border-2 border-dotted border-white rounded-xl my-16">
      <div className="relative flex flex-col gap-8">
        <img
          className="absolute top-[-30px] right-[-30px] w-14 z-10 opacity-20"
          src={quotes}
          alt="Quotation mark icon"
        />
        <p className="text-xl text-center font-medium text-white z-20 text-balance">
          Absolutely great to work with and delivers professional and creative
          work quickly.
        </p>
        <div className="flex items-center justify-center gap-4">
          <img
            className="rounded-full w-12 aspect-square"
            src=""
            alt="random"
          />
          <div className="flex flex-col">
            <strong className="font-semibold text-white">Name</strong>
            <span className="text-gray-300">President</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Testimonials
