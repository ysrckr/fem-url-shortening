import Image from "next/image";
import React from "react";
import { cn } from "@/utils/cn";

export type ImageProps = {
  src: string;
  alt: string;
};

type CardProps = {
  title: string;
  content: string;
  image: ImageProps;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ title, content, image, ...props }: CardProps) => (
  <div
    {...props}
    className={cn(
      "bg-white rounded-lg shadow flex flex-col max-w-sm gap-4 pt-0 px-6 pb-6 mx-auto my-6",
      props.className
    )}
  >
    <Image
      src={image.src}
      alt={image.alt}
      className="object-cover rounded-full bg-purple-95 p-3 -translate-y-8 mx-auto lg:mx-0"
      width={64}
      height={64}
    />
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-5 max-w-xs">{content}</p>
  </div>
);
