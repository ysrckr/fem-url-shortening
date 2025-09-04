import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Shortener } from "@/components/shortener/shortener";
import { ShortenerSkeleton } from "@/components/skeletons/shortener.skeleton";
import { Suspense } from "react";
import { cn } from "@/utils/cn";

const cards = [
  {
    title: "Brand Recognition",
    content:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    image: {
      src: "/icon-brand-recognition.svg",
      alt: "Brand Recognition",
    },
  },
  {
    title: "Detailed Records",
    content:
      "Gain insights into your link performance with our detailed records. Understand your audience better and optimize your strategies.",
    image: {
      src: "/icon-detailed-records.svg",
      alt: "Detailed Records",
    },
  },
  {
    title: "Fully Customizable",
    content:
      "Improve brand awareness and content discoverability through customizable links, landing pages, and more.",
    image: {
      src: "/icon-fully-customizable.svg",
      alt: "Fully Customizable",
    },
  },
];

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
      <section className="bg-gray-100">
        {" "}
        <Suspense fallback={<ShortenerSkeleton />}>
          <Shortener />
        </Suspense>
      </section>
      <section className="bg-gray-100 px-4 pb-48">
        <div className="container m-auto text-center py-6 px-4">
          <h2 className="mb-4 font-bold text-3xl">Advanced Statistics</h2>
          <p className="text-gray-5 max-w-lg m-auto text-sm">
            Track how your links are performing with our advanced statistics
            dashboard.
          </p>
        </div>
        <div className="container flex justify-between mx-auto gap-6 flex-col lg:flex-row lg:gap-4 lg:px-8 my-6 relative after:absolute after:bg-blue-4 after:lg:h-2 after:lg:w-3/4 after:lg:top-1/2 after:lg:left-1/2 after:lg:-translate-y-1/2 after:lg:-translate-x-1/2 after:h-3/4 after:w-2 after:top-24 after:left-1/2 after:z-0 after:-translate-x-1/2">
          {cards?.length > 0 ? (
            cards.map((card, index) => {
              return (
                <Card
                  key={card.title}
                  {...card}
                  style={{ transform: `translateY(${index * 2}rem)` }}
                  className={cn(`z-10`)}
                />
              );
            })
          ) : (
            <p>No cards available</p>
          )}
        </div>
      </section>
      <section className="bg-purple-95 bg-[url('/bg-boost-mobile.svg')] lg:bg-[url('/bg-boost-desktop.svg')] py-24 bg-no-repeat bg-cover bg-center">
        <div className="container m-auto text-center py-6 px-4">
          <h2 className="mb-4 font-bold text-3xl text-white">
            Boost your links today
          </h2>
          <Button className="rounded-full py-3 px-4">Get Started</Button>
        </div>
      </section>
    </main>
  );
}
