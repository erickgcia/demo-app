import { useState } from 'react'
import PropTypes from 'prop-types'

const QuestionBox = ({ question, answer }) => {
  const [open, isOpen] = useState(false)

  const handleClick = () => {
    isOpen(!open)
  }

  return (
    <details className="block w-1/2 border-2 border-white p-4 rounded-2xl font-medium text-gray-400 text-lg">
      <summary
        onClick={handleClick}
        className="font-semibold text-white text-xl question-faq"
        style={open ? { marginBottom: '1rem' } : {}}
      >
        {question}
      </summary>
      {answer}
    </details>
  )
}

QuestionBox.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

export default QuestionBox
