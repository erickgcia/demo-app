const BenefitCards = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
      <div className="flex flex-col items-center justify-center py-6 px-1 border-t-4 w-full md:w-1/2 border-blue-400 gap-4">
        <strong className="font-semibold text-2xl">Reliable & efficient</strong>
        <p className="text-balance text-center text-md h-10">
          Have full rights to the design you receive, including the source
          files.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center py-6 px-1 border-t-4 w-full md:w-1/2 border-green-400 gap-4">
        <strong className="font-semibold text-2xl">Unlimited revisions</strong>
        <p className="text-balance text-center text-md h-10">
          Request as many revisions if it&apos;s needed.
        </p>
      </div>
    </section>
  )
}

export default BenefitCards
