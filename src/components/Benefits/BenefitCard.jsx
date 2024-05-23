import PropTypes from 'prop-types'

const BenefitCard = ({ title, text, borderColor }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-6 px-1 border-t-4 w-full md:w-1/2 ${borderColor} gap-4`}
    >
      <strong className="font-semibold text-2xl">{title}</strong>
      <p className="text-balance text-center text-md h-10">{text}</p>
    </div>
  )
}

BenefitCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  borderColor: PropTypes.string,
}

export default BenefitCard
