import { useState } from 'react'

const QuestionBox = () => {
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
        How does it work?
      </summary>
      We&apos;ll work with you to understand your business and product. Submit
      your requests for design we&apos;ll get it designed. It&apos;s as simple
      as that.
    </details>
  )
}

export default QuestionBox
