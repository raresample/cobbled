import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-cyan-900 py-4 z-10">
      <div className="container lg:mx-16 sm:mx-8 mx-4">
        <Link href="/" className="text-white font-bold text-2xl">COBBLED</Link>
      </div>
    </nav>
  );
}
