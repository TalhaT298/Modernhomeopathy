import React from "react";
import car1 from "../../../../src/assets/car1.webp";
import car2 from "../../../../src/assets/car2.webp";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Selenium 3x",
      count: "2 Products",
      image: car1,
      bgColor: "bg-[#F3F3FF]"
    },
    {
      id: 2,
      title: "Testes siccati 3x",
      count: "17 Products",
      image: car2,
      bgColor: "bg-[#FFEFF4]"
    },
    {
      id: 3,
      title: "Oral care",
      count: "5 Products",
      image: "https://via.placeholder.com/80x120",
      bgColor: "bg-[#F4FAF9]"
    },
    {
      id: 4,
      title: "Personal Care",
      count: "11 Products",
      image: "https://via.placeholder.com/80x120",
      bgColor: "bg-[#EEF5FF]"
    },
    {
      id: 5,
      title: "Face Mask",
      count: "3 Products",
      image: "https://via.placeholder.com/80x120",
      bgColor: "bg-[#FFF2F4]"
    },
    {
      id: 6,
      title: "Baby Care",
      count: "8 Products",
      image: "https://via.placeholder.com/80x120",
      bgColor: "bg-[#FFF9ED]"
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 " style={{ fontFamily: "Parkinsans, serif", fontWeight: 400 }}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-green-800 mb-6 md:mb-8">
        Popular Categories
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${category.bgColor} text-center p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full`}
          >
            <div className="flex-grow">
              <p className="text-sm sm:text-base md:text-lg font-medium text-[#1F2F56] line-clamp-1">
                {category.title}
              </p>
              <p className="text-xs sm:text-sm text-[#1F2F56] mt-1">
                {category.count}
              </p>
            </div>
            <div className="mt-3 md:mt-4 flex justify-center">
              <img
                src={category.image}
                alt={category.title}
                className="   object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;