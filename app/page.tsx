import Environment from './components/Environment';
import Features from './components/Features';
import Hero from './components/Hero';
import Infra from './components/Infra';

export default function Home() {
  return (
    <main className='bg-[#fcfcff53]'>
      <Hero />
      <div className='bg-[#FCFCFF]'>
      <Environment/>
      <Features/>
      </div>
      <Infra/>
    </main>
  );
}
