import Link from 'next/link';

function Navbar() {
    return (

        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white shadow-md mx-20 my-7 rounded-2xl">
            {/* Logo or Heading */}
            <h2 className="text-xl font-bold text-gray-800">Alware</h2>

            {/* Centered Nav Links */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 font-semibold text-md">
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>

                <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Solutions</Link>

                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition">Services</Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
