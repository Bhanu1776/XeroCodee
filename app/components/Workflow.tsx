import Image from 'next/image';

const Workflow = () => (
  <main className="mb-40 flex justify-center pt-28">
    <div className="mx-6 flex max-w-[90rem] flex-col items-center rounded-3xl bg-[#fafafa] px-4 pb-16 md:mx-14 lg:mx-48 lg:px-20">
      <div className="flex items-center">
        <h1 className="mt-14 text-center text-2xl font-extrabold md:text-4xl">
          The Xerocodee way
        </h1>
        <Image
          loading="lazy"
          src="/Assets/Rocket.png"
          className="ml-4 mt-14"
          alt="Rocket"
          height={10}
          width={50}
        />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <div className="flex flex-col">
          <h2 className="mt-20 text-center text-2xl font-bold md:text-4xl">
            01
          </h2>
          <Image
            loading="lazy"
            src="/Assets/line.png"
            alt="line"
            height={20}
            width={60}
          />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-center text-xl font-bold md:mt-14 md:text-2xl">
            Self Serve Infrastructure
          </h3>
          <p className="mt-4 text-center font-light">
            {' '}
            Accelerate by self-serving production-ready infrastructure and
            customize as you scale.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 md:flex-nowrap">
          <div className="flex flex-col">
            <div className="mt-16 flex flex-wrap gap-8  text-[0.60rem] lg:mx-0 lg:text-xs">
              <button
                type="button"
                className="border-b-4 border-blue-600 p-0 md:px-2 md:py-1 "
              >
                Your Cloud
              </button>
              <button type="button" className="bg-white p-0 md:px-2 md:py-1">
                Infra Components
              </button>
              <button type="button" className="bg-white p-0 md:px-2 md:py-1">
                Self-Hosted Apps
              </button>
            </div>
            <Image
              loading="lazy"
              src="/Assets/cloud.png"
              alt="cloud"
              height={100}
              width={1000}
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-2xl font-extrabold lg:mt-10">In Your Cloud</h1>
            <p className="mt-4 font-light">
              Your infrastructure runs on your AWS or GCP account. Never get
              locked in. Infinitely scalable.Azure support coming soon
            </p>
          </div>
        </div>
      </div>

      {/* //* 2nd */}

      <div className="flex flex-col items-center gap-y-8">
        <div className="flex flex-col">
          <h2 className="mt-20 text-center text-2xl font-bold md:text-4xl">
            02
          </h2>
          <Image
            loading="lazy"
            src="/Assets/line.png"
            alt="line"
            height={20}
            width={60}
          />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="mt-14 text-center text-xl font-bold md:text-2xl">
            Deploy applications, fast!
          </h3>
          <p className="mt-4 text-center font-light">
            {' '}
            Set up automated deployments of your application in 5 minutes and
            get back to building stuff that matters.{' '}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-4 md:flex-nowrap">
          <Image
            loading="lazy"
            src="/Assets/deploy.png"
            alt="cloud"
            height={80}
            width={800}
          />
          <div className="mt-6 flex flex-col justify-center text-center md:mt-0 md:text-left lg:ml-20">
            <h1 className="text-2xl font-extrabold lg:mt-10">
              Configurable Build and Deploy pipelines
            </h1>
            <p className="mt-4 font-light">
              Portable builds powered by Dagger and continuous deployments
              powered by ArgoCD - you gain more control of your pipelines with
              composable custom, build, and deploy stages.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-4 md:flex-nowrap">
          <Image
            loading="lazy"
            src="/Assets/deploy2.png"
            className="order-1 md:order-2"
            alt="cloud"
            height={80}
            width={450}
          />
          <div className="order-2 mt-6 flex flex-col justify-center text-center md:order-1 md:mt-0 md:text-left lg:mr-10">
            <h1 className="text-2xl font-extrabold lg:mt-10">Push to Deploy</h1>
            <p className="mt-4 font-light">
              Just connect your repo with one click and push. Argonaut’s deep
              integration with GitHub Actions and GitLab pipelines build and
              deploy your code on every push.
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-4 md:flex-nowrap">
          <Image
            loading="lazy"
            src="/Assets/runtimes.png"
            alt="cloud"
            height={80}
            width={350}
          />
          <div className="mt-6 flex flex-col justify-center text-center md:mt-0 md:text-left lg:ml-10">
            <h1 className="text-2xl font-extrabold lg:mt-10">
              Multiple runtimes
            </h1>
            <p className="mt-4 font-light">
              Quickly deploy apps to containerized or serverless runtimes on
              your cloud and customize architectures to cost and performance
              constraints. Deploy on Kubernetes using dockerfiles or buildpacks,
              AWS Lambda, or GCP Cloud Functions.
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-4 md:flex-nowrap">
          <Image
            loading="lazy"
            src="/Assets/scale.png"
            className="order-2"
            alt="cloud"
            height={80}
            width={400}
          />
          <div className="order-2 mt-6 flex flex-col justify-center text-center md:order-1 md:mt-0 md:text-left">
            <h1 className="text-2xl font-extrabold lg:mt-10">
              Scale infinitely
            </h1>
            <p className="mt-4 font-light">
              Every deployment is a zero-downtime deployment without you needing
              to choose custom configurations. You can easily configure
              auto-scaling, resource limits, and health-check URL to further
              optimize application uptime.
            </p>
          </div>
        </div>
      </div>

      {/* //* 3rd */}

      <div className="flex flex-col items-center gap-y-8">
        <div className="flex flex-col">
          <h2 className="mt-20 text-center text-2xl font-bold md:text-4xl">
            03
          </h2>
          <Image
            loading="lazy"
            src="/Assets/line.png"
            alt="line"
            height={20}
            width={60}
          />
        </div>

        <div className="mb-14 flex flex-col items-center">
          <h3 className="mt-14 text-center text-xl font-bold md:text-2xl">
            Visibility into costs and metrics
          </h3>
          <p className="mt-4 text-center font-light">
            {' '}
            Automatically track resource costs, across clouds, on every change.
            Visualize k8s pod metrics - CPU, Network, and Memory.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 md:flex-nowrap">
          <Image
            loading="lazy"
            src="/Assets/Total.png"
            alt="cloud"
            className="lg:ml-24"
            height={80}
            width={500}
          />
          <div className="mb-14 flex flex-col justify-center text-center md:text-left lg:ml-64">
            <h1 className="text-2xl  font-extrabold lg:mt-10">
              Customizable cost dashboards and reports
            </h1>
            <p className="mt-4 font-light">
              Stay on top of your cloud spending with custom cost dashboards and
              reports — sort, filter, and group by your various accounts,
              resources, and cloud regions.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 md:flex-nowrap">
          <Image
            loading="lazy"
            src="/Assets/costs.png"
            className="order-2"
            alt="cloud"
            height={100}
            width={700}
          />
          <div className="order-2 mb-14 flex flex-col justify-center text-center md:order-1 md:text-left lg:mr-20">
            <h1 className="text-2xl font-extrabold lg:mt-10">
              Preview infra costs
            </h1>
            <p className="mt-4 font-light">
              See the cost of a specific resource while choosing it (before
              provisioning). It saves you the hassle of searching through the
              complex pricing pages of your cloud provider or tools.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 md:flex-nowrap">
          <Image
            loading="lazy"
            src="/Assets/observability.png"
            className="h-40 w-[30rem] md:mt-8 lg:ml-24"
            alt="cloud"
            height={50}
            width={1000}
          />
          <div className="mb-14 flex flex-col justify-center text-center md:text-left lg:ml-44">
            <h1 className="text-2xl font-extrabold lg:mt-10">
              Observability from day one
            </h1>
            <p className="mt-4 font-light">
              Comes with built-in Kubernetes pod metrics. Easily plug in
              monitoring and observability tools of your choice, such as
              Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your
              application metrics from day 1.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Workflow;
