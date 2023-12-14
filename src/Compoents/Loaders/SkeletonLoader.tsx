import React from "react";

 const Skeleton = ({
  containerClass,
  skeletonClass,
}: {
  containerClass?: string;
  skeletonClass?: string;
}) => {
  return (
    <div
      role="status"
      className={`space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center ${containerClass}`}
    >
      <div
        className={`h-3 bg-gray-300 rounded-full dark:bg-gray-400 w-full mb-4 ${skeletonClass}`}
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton