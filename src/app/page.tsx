import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-primary flex items-center justify-center h-full">
      <Link href="/ride-selection" className='text-5xl bg-amber-300 rounded-4xl p-5'>Click To Enter The Site</Link>
    </div>
  );
}
