import Image from "next/image";
import Link from "next/link";
import { Shortener } from "@/components/shortener";
import { ShortenerSkeleton } from "@/components/skeletons/shortener.skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="lg:container lg:m-auto pb-10 md:pb-20 lg:pb-24">
        {" "}
        <div className="lg:px-8">
          <div className="overflow-hidden md:flex md:items-center md:justify-center md:flex-row-reverse my-8 m-auto w-full">
            <div className="relative h-[325px] w-[450px] md:h-[300px] md:w-[600px] lg:w-2xl lg:m-auto lg:h-auto">
              <Image
                src="/illustration-working.svg"
                alt="Shortly logo"
                className="absolute top-0 left-0 right-0 w-full h-full translate-x-1/12 md:translate-x-1/3 lg:relative lg:translate-x-0"
                width={600}
                height={400}
              />
            </div>
            <div className="my-8 px-2 flex flex-col justify-center items-center gap-4 md:pl-6 lg:w-full lg:pl-0">
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
        </div>
      </section>
      <section className="bg-gray-100 px-4">
        <Suspense fallback={<ShortenerSkeleton />}>
          <Shortener />
        </Suspense>
        <div className="container m-auto text-center py-6 px-4">
          <h2 className="mb-4 font-bold text-3xl">Advanced Statistics</h2>
          <p className="text-gray-5 max-w-lg m-auto text-sm">
            Track how your links are performing with our advanced statistics
            dashboard.
          </p>
        </div>
      </section>
    </main>
  );
}
