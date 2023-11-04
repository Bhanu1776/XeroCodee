import Environment from './components/Environment';
import Features from './components/Features';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className='bg-[#fcfcff53]'>
      <Hero />
      <div className='bg-[#FCFCFF]'>
      <Environment/>
      <Features/>
      </div>
    </main>
  );
}
