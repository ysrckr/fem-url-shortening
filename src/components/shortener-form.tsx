"use client";

import { Button } from "./button";

export const ShortenerForm = () => (
  <form action="">
    <div className="container flex items-center justify-center mx-auto px-4 py-5 bg-[url(/bg-shorten-mobile.svg)] lg:bg-[url(/bg-shorten-desktop.svg)] bg-no-repeat rounded-lg gap-4 flex-col lg:flex-row lg:gap-2 bg-purple-95 lg:w-3xl lg:px-8">
      <input
        type="text"
        className="bg-white placeholder:text-gray-4 px-2 py-1 rounded w-full italic"
        placeholder="Shorten a link here..."
      />
      <Button className="lg:w-1/3">Shorten It!</Button>
    </div>
  </form>
);
