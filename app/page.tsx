import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <Image src="/assets/pobepoxo.png" alt="Pobe Poxo Logo" width={200} height={200} className="mb-8" />
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700">Coming Soon!</p>
          <div className="mt-4 flex space-x-4">
            <Link href="/about">
              <span className="text-lg text-gray-700 hover:text-black">About</span>
            </Link>
            <Link href="/games">
              <span className="text-lg text-gray-700 hover:text-black">Games</span>
            </Link>
            <Link href="/blog">
              <span className="text-lg text-gray-700 hover:text-black">Blog</span>
            </Link>
            <Link href="/contact">
              <span className="text-lg text-gray-700 hover:text-black">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
