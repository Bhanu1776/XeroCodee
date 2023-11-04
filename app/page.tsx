import Environment from './components/Environment';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className='bg-[#fcfcff53]'>
      <Hero />
      <div className='bg-[#FCFCFF]'>
      <Environment/>
      </div>
    </main>
  );
}
