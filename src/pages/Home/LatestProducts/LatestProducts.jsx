import React from "react";
import card1 from "../../../../src/assets/card5.webp";
import card2 from "../../../../src/assets/card2.webp";
import card3 from "../../../../src/assets/card3.webp";
import card4 from "../../../../src/assets/card4.webp";

const LatestProducts = () => {
  const products = [
    {
      id: 1,
      image: card1,
      discount: "-13%",
      title: "Himalaya Baby Body Lotion 400 ml Pack Of 2",
      rating: 5,
      originalPrice: "$9.20",
      discountedPrice: "$8",
    },
    {
      id: 2,
      image: card2,
      discount: "-14%",
      title: "mCaffeine Deep Moisturization Body Butter",
      rating: 5,
      originalPrice: "$10.50",
      discountedPrice: "$9",
    },
    {
      id: 3,
      image: card3,
      discount: "-10%",
      title: "Liveasy Diabetic Protein - Sugar Management",
      rating: 4,
      originalPrice: "$5",
      discountedPrice: "$4.50",
    },
    {
      id: 4,
      image: card4,
      discount: "-10%",
      title: "PharmEasy Lumbar Sacro Support Belt",
      rating: 4,
      originalPrice: "$6.00",
      discountedPrice: "$5.40",
    },
  ];

  return (
    <div className="py-10">
        <div className="p-4 md:p-2" style={{ fontFamily: "Parkinsans, serif", fontWeight: 400 }}>
      <h2 className="text-2xl md:text-4xl font-bold text-center text-green-800 mb-6 py-8">
        Latest products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded shadow-md p-2 relative flex flex-col h-full"
          >
            <span className="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded-tr rounded-bl z-10">
              {product.discount}
            </span>
            <div className="flex-grow flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className=" object-contain"
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-sm font-medium text-blue-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                {product.title}
              </h3>
              
              {/* <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 fill-current ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div> */}
            </div>
            
            <div className="mt-auto">
              <div className="text-sm">
                <span className="text-gray-500 line-through mr-2">
                  {product.originalPrice}
                </span>
                <span className="text-blue-900 font-bold">
                  {product.discountedPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LatestProducts;