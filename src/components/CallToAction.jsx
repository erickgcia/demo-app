import MainButton from './MainButton'

const CallToAction = () => {
  return (
    <article className="py-20 w-3/4 mx-auto">
      <section className="container-size flex flex-col items-center justify-center gap-12 border-2 border-black-500 rounded-xl">
        <p className="text-3xl font-semibold text-black-500 text-center text-balance">
          Ready to fall in love with your website?
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <MainButton textClr="white" color="black-500" size="xl" />
          <button className="btn md:w-44 bg-zinc-100 text-black-500 text-lg font-semibold border-black-500">
            Let&apos;s chat
          </button>
        </div>
      </section>
    </article>
  )
}

export default CallToAction
