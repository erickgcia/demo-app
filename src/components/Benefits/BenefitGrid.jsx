import { calendar, medal, price, circle } from '../../assets/images'

const BenefitGrid = () => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <section className="md:col-span-1 lg:col-span-2 flex flex-col h-bg w-full rounded-xl p-6 gap-8">
        <div className="flex flex-col gap-4">
          <strong className="font-semibold text-3xl">Uniquely yours</strong>
          <p className="text-lg text-balance">
            Every website is built from scratch bringing every design come to
            life with amazing quality.
          </p>
        </div>
        <div className="w-full lg:w-1/2 self-end">
          <img
            className="w-3/4 mx-auto md:mx-0 md:w-full aspect-square object-contain"
            src={circle}
            alt="Color of circles icon"
          />
        </div>
      </section>
      <section className="md:col-span-1 flex flex-col w-full rounded-xl p-6 gap-4 bg-custom-gray">
        <div className="flex flex-col gap-4">
          <div className="p-4">
            <img
              className="w-3/4 mx-auto md:mx-0 md:w-full aspect-square object-contain"
              src={price}
              alt="Price tag icon"
            />
          </div>
          <strong className="font-semibold text-3xl">Simple plans</strong>
          <p className="text-lg text-balance">
            No hidden fees, no surprises. Just choose the plan that&apos;s right
            for you.
          </p>
        </div>
      </section>
      <section className="md:col-span-1 flex flex-col w-full rounded-xl p-6 gap-4 bg-custom-gray">
        <div className="flex flex-col gap-4">
          <div className="p-4">
            <img
              className="w-3/4 mx-auto md:mx-0 md:w-full aspect-square object-contain"
              src={medal}
              alt="Medal with blue ribbon icon"
            />
          </div>
          <strong className="font-semibold text-3xl">Top-notch quality</strong>
          <p className="text-lg text-balance">
            Outstanding websites that are easy to navigate and engage your
            audience.
          </p>
        </div>
      </section>
      <section className="md:col-span-1 lg:col-span-2 flex flex-col h-bg w-full rounded-xl p-6 gap-8">
        <div className="flex flex-col gap-4">
          <strong className="font-semibold text-3xl">Fast delivery</strong>
          <p className="text-lg text-balance">
            The designs are delivered to you within a few days without
            compromising it&apos;s outcome.
          </p>
        </div>
        <div className="w-full lg:w-1/2 self-end">
          <img
            className="w-3/4 mx-auto md:mx-0 md:w-full aspect-square object-contain"
            src={calendar}
            alt="Caledar icon"
          />
        </div>
      </section>
    </article>
  )
}

export default BenefitGrid
