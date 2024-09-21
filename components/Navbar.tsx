import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">Pobe Poxo</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/games" className="hover:text-gray-400">Games</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
