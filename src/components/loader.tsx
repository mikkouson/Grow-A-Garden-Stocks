import { LoaderCircle } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2">
      <LoaderCircle className="h-8 w-8 animate-spin text-gray-500" />
      <span className="">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
