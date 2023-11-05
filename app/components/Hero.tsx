import Image from 'next/image';
import { Poppins } from 'next/font/google';

const Pop = Poppins({
  subsets: ['latin'],
  variable: '--font-Roboto',
  weight: '900',
});

const Hero = () => (
  <main className="mt-20 flex flex-col items-center">
    <h1 className="text-center font-extrabold xxsm:text-3xl md:text-5xl">
      Build your audience and grow your <br className="hidden lg:block" />
      <span>brand</span>
    </h1>
    <h3 className="my-8 text-center font-light xxsm:px-4 xxsm:text-lg md:text-xl lg:p-0">
      no more, no less. Deploy from our single pane of glass, manage them with
      ease and scale up as <br className="hidden lg:block" />
      <span>fast as your workload grows </span>
    </h3>
    <button
      type="button"
      className="rounded-md bg-blue-700 px-8 py-2 text-lg font-semibold text-white md:mt-5 md:px-10 md:py-3"
    >
      Get Started Now
    </button>
    <Image
      loading="lazy"
      src="/Assets/Hero.png"
      alt="Architecture"
      className="mt-5 xxsm:h-52 xxsm:px-4 md:h-auto md:max-w-full lg:px-0"
      height={1000}
      width={1250}
    />
  </main>
);

export default Hero;
