import Image from 'next/image'
import React from 'react'

const Workflow = () => {
  return (
    <main className='pt-28 mb-40 flex justify-center'>
      <div className='flex flex-col items-center pb-16 max-w-[90rem] bg-[#fafafa] rounded-3xl mx-6 md:mx-14 lg:mx-48 px-4 lg:px-20'>
        <div className='flex items-center'>
          <h1 className='font-extrabold text-2xl text-center md:text-4xl mt-14'>The Xerocodee way</h1>
          <Image loading="lazy"
 src="/Assets/Rocket.png" className='mt-14 ml-4' alt="Rocket" height={10} width={50} />
        </div>

        <div className="flex flex-col gap-y-8 items-center">
          <div className="flex flex-col">
            <h2 className='font-bold text-2xl text-center md:text-4xl mt-20'>01</h2>
            <Image loading="lazy"
 src="/Assets/line.png" alt="line" height={20} width={60} />
          </div>

          <div className='flex flex-col items-center'>
            <h3 className='font-bold text-xl text-center md:text-2xl md:mt-14'>Self Serve Infrastructure</h3>
            <p className='mt-4 font-light text-center'> Accelerate by self-serving production-ready infrastructure and customize as you scale.</p>
          </div>

          <div className='flex gap-x-4 flex-wrap md:flex-nowrap'>
            <div className="flex flex-col">
              <div className='flex gap-8 mt-16 text-[0.60rem]  lg:text-xs flex-wrap lg:mx-0'>
                <button className='md:py-1 md:px-2 p-0 border-b-4 border-blue-600 '>Your Cloud</button>
                <button className='md:py-1 md:px-2 p-0 bg-white'>Infra Components</button>
                <button className='md:py-1 md:px-2 p-0 bg-white'>Self-Hosted Apps</button>
              </div>
              <Image loading="lazy"
 src="/Assets/cloud.png" alt="cloud" height={100} width={1000} />
            </div>
            <div className="flex flex-col text-center md:text-left justify-center">
              <h1 className='font-extrabold text-2xl lg:mt-10'>In Your Cloud</h1>
              <p className='mt-4 font-light'>Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable.Azure support coming soon</p>
            </div>
          </div>
        </div>

  {/* //* 2nd */}

        <div className="flex flex-col gap-y-8 items-center">
          <div className="flex flex-col">
            <h2 className='font-bold text-2xl text-center md:text-4xl mt-20'>02</h2>
            <Image loading="lazy"
 src="/Assets/line.png" alt="line" height={20} width={60} />
          </div>

          <div className='flex flex-col items-center'>
            <h3 className='font-bold text-xl text-center md:text-2xl mt-14'>Deploy applications, fast!</h3>
            <p className='mt-4 font-light text-center'> Set up automated deployments of your application in 5 minutes and get back to building stuff that matters. </p>
          </div>

          <div className='flex gap-x-4 flex-wrap mt-8 md:flex-nowrap'>
              <Image loading="lazy"
 src="/Assets/deploy.png" alt="cloud" height={80} width={800} />
            <div className="flex flex-col text-center md:text-left lg:ml-20 mt-6 md:mt-0 justify-center">
              <h1 className='font-extrabold text-2xl lg:mt-10'>Configurable Build and Deploy pipelines</h1>
              <p className='mt-4 font-light'>Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.</p>
            </div>
          </div>
          <div className='flex gap-x-4 flex-wrap mt-8 md:flex-nowrap'>
              <Image loading="lazy"
 src="/Assets/deploy2.png" className='order-1 md:order-2' alt="cloud" height={80} width={450} />
            <div className="flex flex-col text-center lg:mr-10 order-2 md:order-1 mt-6 md:mt-0 md:text-left justify-center">
              <h1 className='font-extrabold text-2xl lg:mt-10'>Push to Deploy</h1>
              <p className='mt-4 font-light'>Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.</p>
            </div>
          </div>
          <div className='flex gap-x-4 flex-wrap mt-14 md:flex-nowrap'>
              <Image loading="lazy"
 src="/Assets/runtimes.png" alt="cloud" height={80} width={350} />
            <div className="flex flex-col text-center md:text-left lg:ml-10 mt-6 md:mt-0 justify-center">
              <h1 className='font-extrabold text-2xl lg:mt-10'>Multiple runtimes</h1>
              <p className='mt-4 font-light'>Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.</p>
            </div>
          </div>
          <div className='flex gap-x-4 flex-wrap mt-14 md:flex-nowrap'>
              <Image loading="lazy"
 src="/Assets/scale.png" className='order-2' alt="cloud" height={80} width={400} />
            <div className="flex flex-col text-center md:text-left order-2 md:order-1 mt-6 md:mt-0 justify-center">
              <h1 className='font-extrabold text-2xl lg:mt-10'>Scale infinitely</h1>
              <p className='mt-4 font-light'>Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.</p>
            </div>
          </div>
        </div>


  {/* //* 3rd */}

        <div className="flex flex-col gap-y-8 items-center">
          <div className="flex flex-col">
            <h2 className='font-bold text-2xl text-center md:text-4xl mt-20'>03</h2>
            <Image loading="lazy"
 src="/Assets/line.png" alt="line" height={20} width={60} />
          </div>

          <div className='flex flex-col mb-14 items-center'>
            <h3 className='font-bold text-xl text-center md:text-2xl mt-14'>Visibility into costs and metrics</h3>
            <p className='mt-4 font-light text-center'> Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.</p>
          </div>

          <div className='flex gap-x-4 flex-wrap md:flex-nowrap'>
              <Image loading="lazy"
 src="/Assets/Total.png" alt="cloud" className='lg:ml-24' height={80} width={500} />
            <div className="flex flex-col text-center mb-14 lg:ml-64 md:text-left justify-center">
              <h1 className='font-extrabold  text-2xl lg:mt-10'>Customizable cost dashboards and reports</h1>
              <p className='mt-4 font-light'>Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.</p>
            </div>
          </div>
          <div className='flex gap-x-4 flex-wrap md:flex-nowrap'>
              <Image loading="lazy"
 src="/Assets/costs.png" className='order-2' alt="cloud" height={100} width={700} />
            <div className="flex flex-col text-center mb-14 lg:mr-20 order-2 md:order-1 md:text-left justify-center">
              <h1 className='font-extrabold text-2xl lg:mt-10'>Preview infra costs</h1>
              <p className='mt-4 font-light'>See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.</p>
            </div>
          </div>
          <div className='flex gap-x-4 flex-wrap md:flex-nowrap'>
              <Image loading="lazy"
 src="/Assets/observability.png" className='lg:ml-24 w-[30rem] h-40 md:mt-8' alt="cloud" height={50} width={1000} />
            <div className="flex flex-col text-center mb-14 md:text-left lg:ml-44 justify-center">
              <h1 className='font-extrabold text-2xl lg:mt-10'>Observability from day one</h1>
              <p className='mt-4 font-light'>Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Workflow