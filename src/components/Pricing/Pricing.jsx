import PricingCard from './PricingCard'
import { pricingListing } from '../../constants'

const Pricing = () => {
  const { basic, popular, advance } = pricingListing
  return (
    <article className="container-size">
      <section className="flex flex-col items-center justify-center gap-6 py-10">
        <div className="flex flex-col gap-2 font-medium">
          <span className="text-3xl text-gray-400">Plans</span>
          <strong className="text-6xl font-semibold">
            Choose what&apos;s right for you
          </strong>
        </div>
        <p className="text-center text-balance text-lg font-medium">
          Enhance your online identity at a budget-friendly cost with our web
          design and no-code development service at a flat fee.
        </p>
      </section>
      <article className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PricingCard
          title={basic.title}
          text={basic.text}
          price={basic.price}
          list={basic.list}
          spots={basic.spots}
          bgColor={basic.bgColor}
        />
        <PricingCard
          title={popular.title}
          text={popular.text}
          price={popular.price}
          list={popular.list}
          spots={popular.spots}
          bgColor={popular.bgColor}
        />
        <PricingCard
          title={advance.title}
          text={advance.text}
          price={advance.price}
          list={advance.list}
          spots={advance.spots}
          bgColor={advance.bgColor}
        />
      </article>
    </article>
  )
}

export default Pricing
