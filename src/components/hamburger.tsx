import { cn } from "@/utils/cn";

type HamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
  ref: React.Ref<HTMLButtonElement>;
};

export const Hamburger = ({ isOpen, onClick, ref }: HamburgerProps) => {
  return (
    <button
      className="border-0 bg-transparent p-0 flex flex-col gap-1 cursor-pointer md:hidden"
      onClick={onClick}
      ref={ref}
      type="button"
      aria-expanded={isOpen}
      aria-controls="mobile-nav"
    >
      <div
        className={cn(
          "h-1 w-6 bg-gray-5 transition-transform duration-200 ease-in-out",
          {
            ["translate-y-2"]: isOpen,
            ["rotate-45"]: isOpen,
          }
        )}
      ></div>
      <div
        className={cn(
          "h-1 w-6 bg-gray-5 transition-opacity duration-200 ease-in-out",
          {
            ["opacity-0"]: isOpen,
          }
        )}
      ></div>
      <div
        className={cn(
          "h-1 w-6 bg-gray-5 transition-transform duration-200 ease-in-out",
          {
            ["-translate-y-2"]: isOpen,
            ["-rotate-45"]: isOpen,
          }
        )}
      ></div>
    </button>
  );
};
