import React from "react";
import card1 from "../../../../src/assets/card1.webp"
import card2 from "../../../../src/assets/card2.webp"

const LatestProducts = () => {
  return (
    <div>
      <div class="bg-gray-100 p-6 " style={{ fontFamily: "Parkinsans, serif", fontWeight: 400 }}>
        <h2 class="text-3xl font-bold text-center text-green-800 mb-6">Latest products</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white border rounded shadow-md p-4 relative">
            <span class="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded-tr rounded-bl z-10">
              -13%
            </span>
            <img
              src={card1}
              alt="Product 1"
              class="mx-auto object-contain mt-2"
            ></img>
            {/* <div class="flex justify-between text-center text-xs font-semibold mt-4 text-blue-900">
        <div><div class="text-lg">507</div><div class="text-[10px]">DAYS</div></div>
        <div><div class="text-lg">09</div><div class="text-[10px]">HRS</div></div>
        <div><div class="text-lg">08</div><div class="text-[10px]">MIN</div></div>
        <div><div class="text-lg text-red-600">16</div><div class="text-[10px]">SEC</div></div>
      </div> */}
            <h3 class="mt-4 text-sm font-medium text-blue-900">
              Himalaya Baby Body Lotion 400 ml Pack Of 2
            </h3>
            <div class="flex items-center mt-2 text-yellow-400">
              <template x-for="i in 5">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
                </svg>
              </template>
            </div>
            <div class="mt-2 text-sm">
              <span class="text-gray-500 line-through mr-2">$9.20</span>
              <span class="text-blue-900 font-bold">$8</span>
            </div>
          </div>

          <div class="bg-white border rounded shadow-md p-4 relative">
            <span class="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded-tr rounded-bl z-10">
              -14%
            </span>
            <img
              src={card2}
              alt="Product 2"
              class="mx-auto  object-contain mt-2"
            ></img>
            {/* <div class="flex justify-between text-center text-xs font-semibold mt-4 text-blue-900">
        <div><div class="text-lg">870</div><div class="text-[10px]">DAYS</div></div>
        <div><div class="text-lg">09</div><div class="text-[10px]">HRS</div></div>
        <div><div class="text-lg">08</div><div class="text-[10px]">MIN</div></div>
        <div><div class="text-lg text-red-600">16</div><div class="text-[10px]">SEC</div></div>
      </div> */}
            <h3 class="mt-4 text-sm font-medium text-blue-900">
              mCaffeine Deep Moisturization Body Butter
            </h3>
            <div class="flex items-center mt-2 text-yellow-400">
              <template x-for="i in 5">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
                </svg>
              </template>
            </div>
            <div class="mt-2 text-sm">
              <span class="text-gray-500 line-through mr-2">$10.50</span>
              <span class="text-blue-900 font-bold">$9</span>
            </div>
          </div>

          <div class="bg-white border rounded shadow-md p-4 relative">
            <span class="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded-tr rounded-bl z-10">
              -10%
            </span>
            <img
              src="https://i.imgur.com/9k5dXlG.png"
              alt="Product 3"
              class="mx-auto h-40 object-contain mt-2"
            ></img>
            {/* <div class="flex justify-between text-center text-xs font-semibold mt-4 text-blue-900">
        <div><div class="text-lg">637</div><div class="text-[10px]">DAYS</div></div>
        <div><div class="text-lg">09</div><div class="text-[10px]">HRS</div></div>
        <div><div class="text-lg">08</div><div class="text-[10px]">MIN</div></div>
        <div><div class="text-lg text-red-600">16</div><div class="text-[10px]">SEC</div></div>
      </div> */}
            <h3 class="mt-4 text-sm font-medium text-blue-900">
              Liveasy Diabetic Protein - Sugar Management
            </h3>
            <div class="flex items-center mt-2 text-yellow-400">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="..." />
              </svg>
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="..." />
              </svg>
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="..." />
              </svg>
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="..." />
              </svg>
              <svg
                class="w-4 h-4 fill-current text-gray-300"
                viewBox="0 0 20 20"
              >
                <path d="..." />
              </svg>
            </div>
            <div class="mt-2 text-sm">
              <span class="text-gray-500 line-through mr-2">$5</span>
              <span class="text-blue-900 font-bold">$4.50</span>
            </div>
          </div>

          <div class="bg-white border rounded shadow-md p-4 relative">
            <span class="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded-tr rounded-bl z-10">
              -10%
            </span>
            <img
              src="https://i.imgur.com/BKxyUbp.png"
              alt="Product 4"
              class="mx-auto h-40 object-contain mt-2"
            ></img>
            {/* <div class="flex justify-between text-center text-xs font-semibold mt-4 text-blue-900">
        <div><div class="text-lg">631</div><div class="text-[10px]">DAYS</div></div>
        <div><div class="text-lg">09</div><div class="text-[10px]">HRS</div></div>
        <div><div class="text-lg">08</div><div class="text-[10px]">MIN</div></div>
        <div><div class="text-lg text-red-600">16</div><div class="text-[10px]">SEC</div></div>
      </div> */}
            <h3 class="mt-4 text-sm font-medium text-blue-900">
              PharmEasy Lumbar Sacro Support Belt
            </h3>
            <div class="flex items-center mt-2 text-yellow-400">
              <template x-for="i in 4">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="..." />
                </svg>
              </template>
              <svg
                class="w-4 h-4 fill-current text-gray-300"
                viewBox="0 0 20 20"
              >
                <path d="..." />
              </svg>
            </div>
            <div class="mt-2 text-sm">
              <span class="text-gray-500 line-through mr-2">$6.00</span>
              <span class="text-blue-900 font-bold">$5.40</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
