import Image from 'next/image';

const Card = () => (
  <main className="flex justify-center pt-28 text-white">
    <div className="mx-6 flex max-w-[90rem] flex-col items-center rounded-3xl bg-[#0C5BC6] px-4 pb-16 md:mx-14 lg:mx-48 lg:px-20">
      <h1 className="mt-20 text-center text-xl font-extrabold leading-relaxed md:mx-2 md:text-3xl lg:mx-4 lg:text-4xl">
        Modernize Apps, Infrastructure With Cloud Native <br /> Tech For
        Resilience, Scalability.
      </h1>

      <section className="mt-14 flex flex-col lg:mt-24 lg:flex-row">
        <Image
          loading="lazy"
          src="/Assets/graph1.png"
          alt="Charts"
          className="lg:-ml-20"
          height={500}
          width={700}
        />
        <div className="mb-16 flex flex-col text-center lg:-ml-10 lg:mb-0 lg:text-left">
          <h2 className="text-4xl  font-extrabold lg:mt-10">
            Real-Time Risk Monitoring
          </h2>
          <p className="mt-6">
            Real-time risk monitoring across your infrastructure and application
            ecosystem will help you maintain ongoing compliance with more than
            05+ different regulatory standards.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row">
        <div className="order-2 flex flex-col text-center lg:text-left">
          <h2 className="mt-10 text-4xl font-extrabold">
            Collaborative <br className="hidden lg:block" /> workflows
          </h2>
          <p className="lg:mt-6 lg:pr-16">
            Share artifacts easily and collaborate with team members, auditors,
            and pen testers via automated procedures. To manage daily compliance
            with automatic notifications and reminders, create, assign, and
            track tasks.
          </p>
        </div>
        <Image
          loading="lazy"
          src="/Assets/graph2.png"
          alt="Charts"
          className="md:ml-20 lg:order-2 lg:ml-0"
          height={250}
          width={450}
        />
      </section>
    </div>
  </main>
);

export default Card;
