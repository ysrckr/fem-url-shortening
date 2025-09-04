"use client";

import { useActionState, useEffect, useState } from "react";

import { Button } from "../ui/button";
import { cn } from "@/utils/cn";
import { shortenURL } from "@/app/actions";

export const ShortenerForm = () => {
  const initialState = { errors: [] as string[], shortURL: undefined };
  const [state, formAction, pending] = useActionState(shortenURL, initialState);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    if (pending) return;
    setShowErrors(state.errors.length > 0);
  }, [state.errors.length, pending]);

  return (
    <form action={formAction}>
      <div className="container flex items-center justify-center mx-auto px-4 py-5 bg-[url(/bg-shorten-mobile.svg)] lg:bg-[url(/bg-shorten-desktop.svg)] bg-no-repeat rounded-lg gap-4 flex-col lg:flex-row lg:gap-2 bg-purple-95 lg:w-3xl lg:px-8 relative">
        <input
          type="text"
          className={cn(
            "bg-white placeholder:text-gray-4 px-2 py-1 rounded w-full placeholder:italic focus:outline-none lg:py-2 lg:px-4 lg:text-lg",
            {
              "border-2 border-red-500": showErrors,
            }
          )}
          placeholder="Shorten a link here..."
          name="longURL"
          aria-invalid={showErrors}
          aria-describedby={showErrors ? "error-message" : undefined}
          disabled={pending}
          onChange={() => setShowErrors(false)}
          required
        />
        {showErrors && (
          <span
            className="text-red-500 italic absolute bottom-0 left-0 translate-x-4 max-lg:-translate-y-12 text-sm lg:translate-x-8"
            id="error-message"
          >
            {state.errors.join(", ")}
          </span>
        )}
        <Button className="lg:w-1/3" disabled={pending} type="submit">
          <span
            className={cn({
              "animate-pulse": pending,
            })}
          >
            {pending ? "Shortening..." : "Shorten It!"}
          </span>
        </Button>
      </div>
    </form>
  );
};
