import { useEffect, useState } from "react";
import Spinner from "../loaders/Spinner";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handler = async () => {
      setLoading(true);
      setLoading(false);
    };
    handler();
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-screen items-center justify-center bg-gray-100 max-w-screen-xl">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <div className="py-10 px-4 sm:px-6 lg:px-8">
              <div className="container mx-auto p-4 rounded-lg shadow-lg relative">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainWrapper;
