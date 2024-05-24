import { frequentlyAskQuestions } from '../../constants/index.js'
import QuestionBox from './QuestionBox.jsx'

const Questions = () => {
  return (
    <article className="bg-black-500 pt-12 pb-6">
      <article className="container-size">
        <section className="w-fit mx-auto flex flex-col items-center justify-center gap-2">
          <span className="block text-gray-400 font-medium text-2xl self-start">
            FAQs
          </span>
          <h6 className="text-5xl font-bold text-white text-balance">
            Questions? Here are answers
          </h6>
        </section>
        <section className="flex flex-col items-center justify-center gap-8 py-20">
          {frequentlyAskQuestions &&
            frequentlyAskQuestions.map(({ question, answer, id }) => (
              <QuestionBox key={id} question={question} answer={answer} />
            ))}
        </section>
      </article>
    </article>
  )
}

export default Questions
