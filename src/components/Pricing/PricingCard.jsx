import PropTypes from 'prop-types'

const PricingCard = ({ title, text, price, list, bgColor, spots }) => {
  return (
    <section
      className={`cols-span-1 w-full aspect-square rounded-3xl ${bgColor} p-8`}
    >
      <div className="flex flex-col gap-4">
        <strong className="font-semibold text-xl">{title}</strong>
        <p className="font-medium text-balance text-md">{text}</p>
        <p className="text-gray-400 my-8 text-xl font-medium">
          <span className="text-black-500 font-semibold text-3xl">{price}</span>{' '}
          USD
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <button className="btn bg-black-500 text-white-500 text-lg font-semibold w-fit">
          Get Started
        </button>
        <a className="text-black-500 font-semibold underline" href="#">
          Book a call
        </a>
      </div>
      <div className="flex flex-col gap-4 pt-12">
        <strong className="block font-semibold text-lg">
          What&apos;s included
        </strong>
        <ul className="list-disc pl-6 font-medium flex flex-col gap-2 h-[200px]">
          {list && list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <p className="font-medium text-center pt-8">
          Only <span className="text-red-400 font-bold">{spots} spots</span>{' '}
          left this month.
        </p>
      </div>
    </section>
  )
}

PricingCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.string,
  list: PropTypes.array,
  bgColor: PropTypes.string,
  spots: PropTypes.string,
}

export default PricingCard
