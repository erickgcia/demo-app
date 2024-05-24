import QuestionBox from './QuestionBox'

const Questions = () => {
  return (
    <article className="bg-black-500 py-10">
      <article className="container-size">
        <section className="w-fit mx-auto flex flex-col items-center justify-center gap-2">
          <span className="block text-gray-400 font-medium text-2xl self-start">
            FAQs
          </span>
          <h6 className="text-5xl font-bold text-white text-balance">
            Questions? Here are answers
          </h6>
        </section>
        <section className="flex flex-col gap-8">
          <QuestionBox />
        </section>
      </article>
    </article>
  )
}

export default Questions
