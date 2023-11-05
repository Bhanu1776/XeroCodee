import Image from 'next/image';

const Environment = () => (
  <figure className="grid grid-cols-4 lg:mx-32">
    <div className="my-2 mt-20 place-self-center p-2">
      <Image
        loading="lazy"
        src="/Assets/E1.png"
        className="mb-12"
        alt="Greenhouse"
        height={40}
        width={240}
      />
    </div>
    <div className="my-2 place-self-center p-2">
      <Image
        loading="lazy"
        src="/Assets/E2.png"
        className=""
        alt="Greenhouse"
        height={40}
        width={150}
      />
    </div>
    <div className="my-2 place-self-center p-2">
      <Image
        loading="lazy"
        src="/Assets/E3.png"
        className=""
        alt="Greenhouse"
        height={40}
        width={150}
      />
    </div>
    <div className="my-2 place-self-center p-2">
      <Image
        loading="lazy"
        src="/Assets/E4.png"
        className=""
        alt="Greenhouse"
        height={40}
        width={110}
      />
    </div>
    <div className="my-2 place-self-center p-2">
      <Image
        loading="lazy"
        src="/Assets/E1.png"
        className=""
        alt="Greenhouse"
        height={40}
        width={240}
      />
    </div>
    <div className="my-2 place-self-center p-2">
      <Image
        loading="lazy"
        src="/Assets/E2.png"
        className=""
        alt="Greenhouse"
        height={40}
        width={150}
      />
    </div>
    <div className="my-2 place-self-center p-2">
      <Image
        loading="lazy"
        src="/Assets/E3.png"
        className=""
        alt="Greenhouse"
        height={40}
        width={150}
      />
    </div>
    <div className="my-2 place-self-center p-2">
      <Image
        loading="lazy"
        src="/Assets/E4.png"
        className=""
        alt="Greenhouse"
        height={40}
        width={110}
      />
    </div>
  </figure>
);

export default Environment;
