import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            <Image
              src="/assets/logo_navbar.png" 
              alt="Pobe Poxo Logo"
              width={100} 
              height={50} 
            />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/about" className="hover:text-gray-400 font-playwrite">About</Link>
          <Link href="/games" className="hover:text-gray-400 font-playwrite">Games</Link>
          <Link href="/contact" className="hover:text-gray-400 font-playwrite">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
