import Image from 'next/image';

const Infra = () => (
  <section className="mb-8 mt-20 flex flex-col items-center">
    <h1 className="mx-3 mb-14 text-center text-4xl font-extrabold lg:mx-0">
      Self serve infrastructure platform for{' '}
      <span className="text-blue-600">
        scaling <br className="hidden lg:block" /> teams
      </span>
    </h1>
    <div className="mx-4 grid grid-cols-1 grid-rows-2 gap-x-14 gap-y-10 md:grid-cols-2 lg:mx-0 lg:gap-x-24">
      <div className="flex  gap-x-4 rounded-2xl bg-white  p-4 px-6 pr-9 shadow-lg">
        <div className="flex justify-center rounded-2xl bg-white p-2 shadow-lg">
          <Image
            loading="lazy"
            src="/Assets/Infrastructure.png"
            alt="Infrastructure"
            height={40}
            width={50}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">Infrastructure</h2>
          <p className="font-light">Automated Cloud Infrastructure Workflow</p>
        </div>
      </div>
      <div className="flex  gap-x-4 rounded-2xl bg-white p-4 px-6 pr-9 shadow-lg">
        <div className="flex justify-center rounded-2xl bg-white p-2 shadow-lg">
          <Image
            loading="lazy"
            src="/Assets/security.png"
            alt="Security"
            height={40}
            width={50}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">Security</h2>
          <p className="font-light">Modern Secure Infrastructure Approach</p>
        </div>
      </div>
      <div className="flex  gap-x-4 rounded-2xl bg-white p-4 px-6 pr-9 shadow-lg">
        <div className="flex justify-center rounded-2xl bg-white p-2 shadow-lg">
          <Image
            loading="lazy"
            src="/Assets/networking.png"
            alt="Networking"
            height={40}
            width={50}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">Networking</h2>
          <p className="font-light ">
            Flexible Secure Application Connectivity
          </p>
        </div>
      </div>
      <div className="flex  gap-x-4 rounded-2xl bg-white p-4 px-6 pr-9 shadow-lg">
        <div className="flex justify-center rounded-2xl bg-white p-2 shadow-lg">
          <Image
            loading="lazy"
            src="/Assets/Application.png"
            alt="Applications"
            height={40}
            width={50}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">Applications</h2>
          <p className="font-light ">
            Automate Application Deployment for Agility
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Infra;
