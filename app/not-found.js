import Link from "next/link";

const NotFound = () => {
  return (
    <div
      className={`flex flex-col bg-white text-gray-800 dark:text-white dark:bg-gray-900 items-center justify-center h-screen `}
    >
      <h1 className="text-4xl font-bold text-center mb-4">Oops!</h1>
      <h3 className="text-2xl font-bold text-center mb-4">Page Not Found</h3>
      <p className="text-lg text-center mb-6">
        It seems you're lost. The page you requested could not be found.
      </p>
      <Link href="/">
        <p className="text-lg text-SubBlue rounded-lg shadow-xl py-2 px-4 hover:underline">
          Return Home
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
