import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pobe Poxo - Central American Game Studio</title>
        <meta name="description" content="Pobe Poxo is a Central American game studio focused on developing immersive and unique gaming experiences. Stay tuned for our upcoming projects." />
        <meta name="keywords" content="Pobe Poxo, game studio, games, indie games, gaming, game development, Central America, Honduras, Costa Rica" />
        <meta property="og:title" content="Pobe Poxo - Central American Game Studio" />
        <meta property="og:description" content="Pobe Poxo is a Central American game studio focused on developing immersive and unique gaming experiences. Stay tuned for our upcoming projects." />
        <meta property="og:image" content="/assets/pobepoxo.png" />
        <meta property="og:url" content="https://pobepoxo.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pobe Poxo - Central American Game Studio" />
        <meta name="twitter:description" content="Pobe Poxo is a Central American game studio focused on developing immersive and unique gaming experiences. Stay tuned for our upcoming projects." />
        <meta name="twitter:image" content="/assets/pobepoxo.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <Image src="/assets/pobepoxo.png" alt="Pobe Poxo Logo" width={200} height={200} className="mb-8" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Pobe Poxo</h1>
            <p className="text-xl font-semibold text-gray-700">Coming Soon!</p>
            <div className="mt-4 flex space-x-4">
              <Link href="/about" className="text-lg text-gray-700 hover:text-black">About</Link>
              <Link href="/games" className="text-lg text-gray-700 hover:text-black">Games</Link>
              <Link href="/contact" className="text-lg text-gray-700 hover:text-black">Contact</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
