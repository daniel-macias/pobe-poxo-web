import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pobe Poxo - Central American Game Studio</title>
        <meta name="description" content="Pobe Poxo is a Central American art and interactive studio making games, digital experiences, and playful experiments." />
        <meta name="keywords" content="Pobe Poxo, game studio, games, indie games, gaming, game development, Central America, Honduras, Costa Rica" />
        <meta property="og:title" content="Pobe Poxo - Central American Game Studio" />
        <meta property="og:description" content="Pobe Poxo is a Central American art and interactive studio making games, digital experiences, and playful experiments." />
        <meta property="og:image" content="/assets/og_banner.png" />
        <meta property="og:url" content="https://pobepoxo.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pobe Poxo - Central American Game Studio" />
        <meta name="twitter:description" content="Pobe Poxo is a Central American art and interactive studio making games, digital experiences, and playful experiments." />
        <meta name="twitter:image" content="/assets/og_banner.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <Image src="/assets/pobepoxo.png" alt="Pobe Poxo Logo" width={200} height={200} className="mb-8" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 font-playwrite">Pobe Poxo</h1>
            <p className="mt-2 max-w-sm text-lg text-gray-600 font-playwrite">Art, games & interactive things.</p>
            <div className="mx-auto mt-4 grid w-64 grid-cols-3 items-center text-center">
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
