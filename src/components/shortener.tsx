import { ShortenerForm } from "./shortener-form";
import { URLListItem } from "./url-list-item";

const shortenLinks = {
  "https://www.example.com/very/long/link": "https://short.ly/abc123",
  "https://www.anotherexample.com/some/other/long/link":
    "https://short.ly/def456",
  "https://www.yetanotherexample.com/a/different/long/link":
    "https://short.ly/ghi789",
};

export const Shortener = () => (
  <div className="-translate-y-14 mx-auto lg:-translate-y-8">
    <ShortenerForm />
    <div className="container mt-3 rounded-lg flex flex-col gap-3 lg:w-3xl mx-auto md:w-3xl">
      {Object.entries(shortenLinks).map(([long, short]) => (
        <URLListItem key={long} url={{ long, short }} />
      ))}
    </div>
  </div>
);
