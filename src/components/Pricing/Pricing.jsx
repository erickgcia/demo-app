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
        <section className="cols-span-1 w-full aspect-square rounded-3xl bg-custom-gray"></section>
        <section className="cols-span-1 w-full aspect-square rounded-3xl h-bg"></section>
        <section className="cols-span-1 w-full aspect-square rounded-3xl bg-custom-gray"></section>
      </article>
    </article>
  )
}

export default Pricing
