"use client";

import { cn } from "@/utils/cn";

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => (
  <button
    {...props}
    className={cn(
      "bg-blue-4 text-white py-1 px-4 rounded hover:scale-99 transition-transform duration-200 cursor-pointer",
      props.className
    )}
    type={props.type || "button"}
  >
    {props.children}
  </button>
);
