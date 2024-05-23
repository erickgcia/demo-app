import {
  designMockup1,
  designMockup2,
  designMockup3,
  designMockup4,
  designMockup5,
  designMockup6,
  designMockup7,
} from '../assets/images'

const ProcessGrid = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 place-content-center gap-4 py-20">
      <div className="w-full rounded-3xl h-full col-span-1 md:col-span-2 t-bg">
        <img
          className="w-full h-full rounded-3xl md:rounded-none object-cover"
          src={designMockup1}
          alt="Design webiste mockup image"
        />
      </div>
      <div className="w-full h-full rounded-3xl aspect-square col-span-1 b-bg">
        <img
          className="w-full h-full rounded-3xl object-contain object-center"
          src={designMockup2}
          alt="Design webiste mockup image"
        />
      </div>
      <div className="w-full rounded-3xl aspect-square col-span-1 h-bg flex place-content-center">
        <img
          className="w-3/4 h-full object-cover object-top"
          src={designMockup3}
          alt="Design webiste mockup image"
        />
      </div>
      <div className="w-full rounded-3xl aspect-square col-span-1 h-bg">
        <img
          className="w-full h-full rounded-3xl object-cover object-top"
          src={designMockup4}
          alt="Design webiste mockup image"
        />
      </div>
      <div className="w-full rounded-3xl aspect-square col-span-1 green-bg flex place-content-center">
        <img
          className="w-3/4 h-full object-cover object-top"
          src={designMockup5}
          alt="Design webiste mockup image"
        />
      </div>
      <div className="w-full md:h-3/4 rounded-3xl col-span-1 md:col-span-2 h-bg">
        <img
          className="w-full rounded-3xl h-full object-cover object-center"
          src={designMockup6}
          alt="Design webiste mockup image"
        />
      </div>
      <div className="w-full rounded-3xl aspect-square col-span-1">
        <img
          className="w-full h-full rounded-3xl object-cover object-center"
          src={designMockup7}
          alt="Design webiste mockup image"
        />
      </div>
    </section>
  )
}

export default ProcessGrid
