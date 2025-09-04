import Link from "next/link";

type MobileNavProps = {
  ref: React.Ref<HTMLDivElement>;
};

export const MobileNav = ({ ref }: MobileNavProps) => (
  <nav
    className="flex flex-col items-center gap-4 absolute top-0 left-0 right-0 md:hidden translate-y-1/6 bg-purple-95 rounded-lg shadow-lg mx-6 py-8 z-10"
    ref={ref}
    id="mobile-nav"
  >
    <Link
      href="#"
      className="text-white hover:text-gray-4 transition-colors duration-200"
    >
      Features
    </Link>
    <Link
      href="#"
      className="text-white hover:text-gray-4 transition-colors duration-200"
    >
      Pricing
    </Link>
    <Link
      href="#"
      className="text-white hover:text-gray-4 transition-colors duration-200"
    >
      Resources
    </Link>
    <span className="bg-gray-5 h-px w-sm block my-4"></span>
    <Link
      href="#"
      className="text-white hover:text-gray-4 transition-colors duration-200"
    >
      Login
    </Link>
    <Link
      href="#"
      className="text-white hover:scale-105 transition-transform duration-200 bg-blue-4 px-6 py-2 rounded-full w-xs font-bold text-center"
    >
      Sign Up
    </Link>
  </nav>
);
