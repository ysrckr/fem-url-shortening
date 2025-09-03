"use client";

import { Button } from "./button";

const shortenLinks = {
  "https://www.example.com/very/long/link": "https://short.ly/abc123",
  "https://www.anotherexample.com/some/other/long/link":
    "https://short.ly/def456",
  "https://www.yetanotherexample.com/a/different/long/link":
    "https://short.ly/ghi789",
};

export const Shortener = () => (
  <div className="-translate-y-14 mx-auto lg:-translate-y-8">
    <div className="container flex items-center justify-center mx-auto px-4 py-5 bg-[url(/bg-shorten-mobile.svg)] lg:bg-[url(/bg-shorten-desktop.svg)] bg-no-repeat rounded-lg gap-4 flex-col lg:flex-row lg:gap-2 bg-purple-95 lg:w-3xl lg:px-8">
      <input
        type="text"
        className="bg-white placeholder:text-gray-4 px-2 py-1 rounded w-full italic"
        placeholder="Shorten a link here..."
      />
      <Button className="lg:w-1/3">Shorten It!</Button>
    </div>
    <div className="container mt-3 rounded-lg flex flex-col gap-3 lg:w-3xl mx-auto md:w-3xl">
      {Object.entries(shortenLinks).map(([long, short]) => (
        <div
          key={long}
          className="flex flex-col items-center justify-between bg-white rounded-lg p-4 shadow gap-2"
        >
          <span className="text-gray-6">{long}</span>
          <span className="text-blue-4">{short}</span>
          <Button onClick={() => navigator.clipboard.writeText(short)}>
            Copy
          </Button>
        </div>
      ))}
    </div>
  </div>
);
