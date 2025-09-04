import Link from "next/link";

export const DesktopNav = () => (
  <nav className="hidden md:flex items-center gap-4 justify-between w-full">
    <div className="flex items-center gap-6 mr-4">
      <Link
        href="#"
        className="text-gray-5 font-bold text-sm hover:text-gray-5 transition-colors duration-200"
      >
        Features
      </Link>
      <Link
        href="#"
        className="text-gray-5 font-bold text-sm hover:text-gray-5 transition-colors duration-200"
      >
        Pricing
      </Link>
      <Link
        href="#"
        className="text-gray-5 font-bold text-sm hover:text-gray-5 transition-colors duration-200"
      >
        Resources
      </Link>
    </div>
    <div className="flex items-center gap-4">
      {" "}
      <Link
        href="#"
        className="text-gray-5 font-bold text-sm hover:text-gray-5 transition-colors duration-200"
      >
        Login
      </Link>
      <Link
        href="#"
        className="bg-blue-4 text-white text-sm px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-200"
      >
        Sign Up
      </Link>
    </div>
  </nav>
);
