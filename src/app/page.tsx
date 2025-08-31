import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container m-auto">
        {" "}
        <div>
          <div className="overflow-hidden">
            <div className="relative h-[400px] w-[600px]">
              <Image
                src="/illustration-working.svg"
                alt="Shortly logo"
                className="absolute top-0 left-0 right-0 translate-x-1 w-full h-full"
                width={600}
                height={400}
              />
            </div>
            <div className="my-8 px-2 flex flex-col justify-center items-center gap-4">
              <h1 className="font-bold text-5xl text-center">
                More than just shorter links
              </h1>
              <p className="text-gray-5 text-center max-w-lg m-auto">
                Build your brand&apos;s recognition and get detailed insights on
                how your links are performing.
              </p>
              <Link
                href="#"
                className="text-center bg-blue-4 hover:scale-105 text-white font-bold py-2 px-8 rounded-full transition-transform duration-200 m-auto"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
