import Image from 'next/image';

const Features = () => (
  <section className="mt-28 flex flex-col items-center">
    <button
      type="button"
      className="rounded-full bg-blue-200 px-8 py-4 text-xl font-bold text-blue-600"
    >
      Features
    </button>
    <h2 className="mt-14 text-center text-2xl font-extrabold md:text-4xl">
      {' '}
      <span className="text-blue-800">Save 1000s</span> of expensive coder hours
    </h2>
    <p className="mx-4 mt-5 text-center text-lg font-light md:mx-0">
      With cloud native technologies, we assist in modernising infrastructure
      and applications for resilience and scalability
    </p>
    <div className="mx-8 mt-16 flex flex-wrap gap-8 text-xs md:text-sm lg:mx-0">
      <button
        type="button"
        className="border-b-4 border-blue-600 p-0 md:px-7 md:py-1 "
      >
        Apps
      </button>
      <button type="button" className="bg-white p-0 md:px-7 md:py-1">
        App Configs
      </button>
      <button type="button" className="bg-white p-0 md:px-7 md:py-1">
        Pipelines
      </button>
      <button type="button" className="bg-white p-0 md:px-7 md:py-1">
        Infra Creation
      </button>
      <button type="button" className="bg-white p-0 md:px-7 md:py-1">
        Cost
      </button>
      <button type="button" className="bg-white p-0 md:px-7 md:py-1">
        Add-Ons
      </button>
      <button type="button" className="bg-white p-0 md:px-7 md:py-1">
        Monitoring
      </button>
      <button type="button" className="bg-white p-0 md:px-7 md:py-1">
        Connections
      </button>
    </div>
    <Image
      loading="lazy"
      src="/Assets/Features.png"
      alt="Features"
      className="mt-14 xxsm:h-52 xxsm:px-4 md:h-auto md:max-w-full lg:px-0"
      height={1000}
      width={1250}
    />

    {/* Comparison */}
    <figure className="mb-32 mt-20 grid grid-cols-2 place-content-center lg:gap-x-40">
      <div className="max-h-[25rem] place-self-center">
        <h3 className="mt-10 text-center font-bold md:text-xl">
          Without XeroCodee
        </h3>
        <Image
          loading="lazy"
          src="/Assets/Without_XeroCodee.png"
          alt="Xerocodee"
          className="mt-16 xxsm:h-52 xxsm:px-4 md:h-auto md:max-w-full lg:px-0"
          height={200}
          width={350}
        />
      </div>
      <div className="max-h-[25rem] place-self-center">
        <h3 className="mt-10 text-center font-bold md:ml-14 md:text-xl">
          With XeroCodee
        </h3>
        <Image
          loading="lazy"
          src="/Assets/With_XeroCodee.png"
          alt="Xerocodee"
          className="mt-16 xxsm:h-52 xxsm:px-4 md:h-auto md:max-w-full lg:px-0"
          height={250}
          width={400}
        />
      </div>
    </figure>
  </section>
);

export default Features;
