import Image from "next/image";
import Link from "next/link";

const shortenLinks = {
  "https://www.example.com/very/long/link": "https://short.ly/abc123",
  "https://www.anotherexample.com/some/other/long/link":
    "https://short.ly/def456",
  "https://www.yetanotherexample.com/a/different/long/link":
    "https://short.ly/ghi789",
};
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
        <div className="-translate-y-14 mx-auto lg:-translate-y-8">
          <div className="container flex items-center justify-center mx-auto px-4 py-5 bg-[url(/bg-shorten-mobile.svg)] lg:bg-[url(/bg-shorten-desktop.svg)] bg-no-repeat rounded-lg gap-4 flex-col lg:flex-row lg:gap-2 bg-purple-95 lg:w-3xl lg:px-8">
            <input
              type="text"
              className="bg-white placeholder:text-gray-4 px-2 py-1 rounded w-full italic"
              placeholder="Shorten a link here..."
            />
            <button
              type="button"
              className="bg-blue-4 hover:scale-99 text-white font-bold py-1 px-4 rounded transition-transform duration-200 w-full cursor-pointer lg:w-1/3"
            >
              Shorten It!
            </button>
          </div>
          <div className="container mt-3 rounded-lg flex flex-col gap-3 lg:w-3xl mx-auto md:w-3xl">
            {Object.entries(shortenLinks).map(([long, short]) => (
              <div
                key={long}
                className="flex flex-col items-center justify-between bg-white rounded-lg p-4 shadow gap-2"
              >
                <span className="text-gray-6">{long}</span>
                <span className="text-blue-4">{short}</span>
                <button
                  type="button"
                  className="bg-blue-4 text-white py-1 px-4 rounded hover:scale-99 transition-transform duration-200"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
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
