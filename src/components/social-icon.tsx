import Image from "next/image";
import Link from "next/link";

type SocialIconProps = {
  to: string;
  image: {
    src: string;
    alt: string;
  };
  width: number;
} & React.HTMLAttributes<HTMLImageElement>;

export const SocialIcon = ({ to, image, width, ...props }: SocialIconProps) => (
  <Link href={to}>
    <Image
      {...props}
      src={image.src}
      alt={image.alt}
      width={width}
      height={width}
    />
  </Link>
);
