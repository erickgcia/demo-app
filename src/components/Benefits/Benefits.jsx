import BenefitGrid from './BenefitGrid'
import BenefitCards from './BenefitCards'

const Benefits = () => {
  return (
    <article className="container-size py-8 flex flex-col gap-12">
      <section className="mx-auto text-left">
        <span className="text-2xl text-gray-400">Benefits</span>
        <h4 className="text-5xl font-semibold py-4 text-pretty">
          Perks that you&apos;ll love
        </h4>
      </section>
      <BenefitGrid />
      <BenefitCards />
    </article>
  )
}

export default Benefits
