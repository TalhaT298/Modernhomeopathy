import React, { useState } from "react";
import { Link } from "react-router-dom";

const Specials = () => {
  const [activeTab, setActiveTab] = useState("NEW ARRIVALS");

  const tabs = [
    { label: "NEW ARRIVALS", path: "/" },
    { label: "POPULAR", path: "/" },
    { label: "SPECIALS", path: "/" },
    { label: "BEST SELLERS", path: "/" },
  ];

  return (
    <div className="flex items-center space-x-4" style={{ fontFamily: "Parkinsans, serif", fontWeight: 400 }}>
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.label}>
          {index !== 0 && <span className="border-l h-5 border-gray-300"></span>}
          <Link to={tab.path} onClick={() => setActiveTab(tab.label)}>
            <div
              className={`px-4 py-2 cursor-pointer ${
                activeTab === tab.label
                  ? "bg-green-700 text-white font-bold"
                  : "text-gray-700 hover:text-green-700"
              }`}
            >
              {tab.label}
            </div>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Specials;
