"use client";

import { Button } from "./ui/button";

type URLListItemProps = {
  url: {
    long: string;
    short: string;
  };
};

export const URLListItem = ({ url }: URLListItemProps) => (
  <div className="flex flex-col items-center justify-between bg-white rounded-lg p-4 shadow gap-2">
    <span className="text-gray-6">{url.long}</span>
    <span className="text-blue-4">{url.short}</span>
    <Button onClick={() => navigator.clipboard.writeText(url.short)}>
      Copy
    </Button>
  </div>
);
