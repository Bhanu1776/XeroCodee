import Image from 'next/image';

const Testimonials = () => (
  <section className="mx-32 mb-16 mt-20 hidden flex-col items-center lg:flex">
    <h1 className="mx-3 mb-14 text-center text-4xl font-extrabold lg:mx-0">
      See our success stories
    </h1>
    <div className="flex ">
      <Image
        loading="lazy"
        src="/Assets/leftArrow.png"
        className="px-3 py-20"
        alt="Arrows"
        height={1000}
        width={100}
      />
      <article className="flex max-w-[60rem] items-center rounded-r-3xl">
        <Image
          loading="lazy"
          src="/Assets/comma.png"
          alt="Arrows"
          height={30}
          width={150}
        />
        <div className="ml-6 flex flex-col">
          <p className="text-justify">
            There are many variations of passages of Lorem Ipsum available but
            the majority have sufferg alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage.
          </p>
          <p className="text-end">
            {' '}
            <span className="text-lg font-bold">-Bhanu Sunka </span> <br />
            Frontend Engineer
          </p>
        </div>
        <div className="mx-14 h-[65%] w-1/2 rounded-full border-[6px] border-blue-700" />
      </article>
      <Image
        loading="lazy"
        src="/Assets/rightArrow.png"
        className="px-3 py-20"
        alt="Arrows"
        height={1000}
        width={100}
      />
    </div>
    <Image
      loading="lazy"
      src="/Assets/threedots.png"
      alt="Arrows"
      height={20}
      width={60}
    />
  </section>
);

export default Testimonials;
