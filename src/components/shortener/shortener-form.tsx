import { Button } from "../ui/button";
import { cn } from "@/utils/cn";
import { shortenURL } from "@/app/actions";
import { useActionState } from "react";

const initialState = { errors: [] as string[], shortURL: undefined };

export const ShortenerForm = () => {
  const [state, formAction, pending] = useActionState(shortenURL, initialState);

  const clearErrors = () => {
    if (state.errors.length > 0) {
      state.errors = [];
    }
  };
  return (
    <form>
      <div className="container flex items-center justify-center mx-auto px-4 py-5 bg-[url(/bg-shorten-mobile.svg)] lg:bg-[url(/bg-shorten-desktop.svg)] bg-no-repeat rounded-lg gap-4 flex-col lg:flex-row lg:gap-2 bg-purple-95 lg:w-3xl lg:px-8">
        <input
          type="text"
          className={cn(
            "bg-white placeholder:text-gray-4 px-2 py-1 rounded w-full placeholder:italic focus:outline-none lg:py-2 lg:px-4 lg:text-lg",
            {
              "border-2 border-red-500": state.errors.length > 0,
            }
          )}
          placeholder="Shorten a link here..."
          name="longURL"
          onChange={clearErrors}
          aria-invalid={state.errors.length > 0}
          aria-describedby={
            state.errors.length > 0 ? "error-message" : undefined
          }
        />
        {state.errors.length > 0 && (
          <span className="text-red-500 italic">{state.errors.join(", ")}</span>
        )}
        <Button className="lg:w-1/3" formAction={formAction} disabled={pending}>
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
