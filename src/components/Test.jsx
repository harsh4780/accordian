import React from "react";

function Test() {
  return (
    <div>
      <div
        class="max-w-full sm:max-w-[768px] md:max-w-[1024px] lg:max-w-[1280px] xl:max-w-[1536px] 2xl:max-w-[1680px] 
            sm:mx-auto px-4 sm:px-6 md:px-8
            bg-red-200 sm:bg-purple-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200"
      >
        <p class="py-4 text-center font-bold">
          Responsive Container with Different Background Colors
        </p>
        <p class="py-2 text-center">
          Resize your browser to see the background color change
        </p>
        <p class="py-2 text-center">Container is full-width below 768px</p>
      </div>
    </div>
  );
}

export default Test;
