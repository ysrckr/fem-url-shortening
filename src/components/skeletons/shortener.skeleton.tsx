export const ShortenerSkeleton = ({ numOfItems = 0 }) => (
  <div className="-translate-y-14 mx-auto lg:-translate-y-8">
    <div className="container flex items-center justify-center mx-auto px-4 py-5 bg-gray-200 rounded-lg gap-4 flex-col lg:flex-row lg:gap-2 lg:w-3xl lg:px-8">
      <div className="bg-white placeholder:text-gray-4 px-2 py-1 rounded w-full italic animate-pulse">
        <span className="block h-4 bg-gray-300 rounded"></span>
      </div>
      <div className="bg-blue-400 text-white py-1 px-4 rounded hover:scale-99 transition-transform duration-200 cursor-pointer animate-pulse">
        <span className="block h-4 bg-blue-300 rounded"></span>
      </div>
    </div>
    {numOfItems > 0 && (
      <div className="container mt-3 rounded-lg flex flex-col gap-3 lg:w-3xl mx-auto md:w-3xl">
        {Array.from({ length: numOfItems }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between bg-white rounded-lg p-4 shadow gap-2"
          >
            <span className="text-gray-6 animate-pulse">
              <span className="block h-4 bg-gray-300 rounded"></span>
            </span>
            <span className="text-blue-4 animate-pulse">
              <span className="block h-4 bg-blue-300 rounded"></span>
            </span>
            <div className="bg-blue-400 text-white py-1 px-4 rounded hover:scale-99 transition-transform duration-200 cursor-pointer animate-pulse">
              <span className="block h-4 bg-blue-300 rounded"></span>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
