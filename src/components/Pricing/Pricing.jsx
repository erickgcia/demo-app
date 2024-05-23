import PricingCard from './PricingCard'

const Pricing = () => {
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
      <article className="grid grid-cols-3 gap-4">
        <PricingCard
          title="Landing Page Design + Development"
          text="Stunning single-page design that's  sure to impress."
          price="999"
          list={[
            'Designs within 7 days',
            'Code development',
            'Unlimited revisions',
          ]}
          spots="5"
          bgColor="bg-custom-gray"
        />
        <PricingCard
          title="5 Page Website Design + Development"
          text="Impress your audience with a engaging multipage website."
          price="2499"
          list={[
            'Designs within 14 days',
            'Code development',
            'Unlimited revisions',
            'Figma source file',
            'Pause anytime',
          ]}
          spots="5"
          bgColor="h-bg"
        />
        <PricingCard
          title="10 Page Website Design + Development"
          text="Maximize your online impact with a feature-rich website."
          price="3499"
          list={[
            'Designs within 18 days',
            'Code development',
            'Unlimited revisions',
            'Figma source file',
            'Multiple brands',
            'Pause anytime',
          ]}
          spots="5"
          bgColor="bg-custom-gray"
        />
      </article>
    </article>
  )
}

export default Pricing
