import BenefitCard from './BenefitCard'

const BenefitCards = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
      <BenefitCard
        title="Reliable & efficient"
        text="Have full rights to the design you receive, including the source files."
        borderColor="border-blue-400"
      />
      <BenefitCard
        title="Unlimited revisions"
        text="Request as many revisions if it's needed."
        borderColor="border-green-400"
      />
    </section>
  )
}

export default BenefitCards
