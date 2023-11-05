import Image from 'next/image';

const Newsletter = () => (
  <main className="mx-6 mb-40 flex flex-col items-center rounded-[2rem] bg-blue-200 pb-20 lg:mx-40 3xl:mx-[35rem]">
    <Image
      loading="lazy"
      src="/Assets/airplane.png"
      className="mt-20"
      alt="airplane"
      height={100}
      width={120}
    />
    <h1 className="mx-4 mt-14 text-center text-2xl font-bold md:text-4xl">
      Subscribe to Our Newsletter & get the <br /> Coupon code.
    </h1>
    <p className="mx-4 mt-4 text-center font-light">
      All your information is completely confidential
    </p>
    <div className="mt-14 flex flex-wrap justify-center gap-2">
      <input
        type="email"
        placeholder="Type your email"
        name="mail"
        id="mail"
        className="m-2 h-14 w-80 rounded-xl p-4"
      />
      <button
        type="button"
        className="my-1 rounded-xl bg-blue-600 px-10 text-xl font-bold text-white"
      >
        Subscribe
      </button>
    </div>
  </main>
);

export default Newsletter;
