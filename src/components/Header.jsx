import React from "react";
import searchIcon from "../assets/searchico.svg";
import bellIcon from "../assets/bell.svg";
import userIcon from "../assets/user.svg";
import settingsIcon from "../assets/settings.svg";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center w-full bg-white py-4 px-6 shadow-md">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <label htmlFor="review" className="text-sm font-medium">
            Review
          </label>
          <select
            id="review"
            className="border border-[#4D4CAC] rounded-lg py-2 px-4 h-10"
          >
            <option value="google">Google</option>
          </select>
        </div>
        <button className="bg-[#40E1FA1A] text-[#2CA01D] text-xs font-bold h-8 px-3 rounded-lg">
          Quickbook’s Data
        </button>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {[
          { icon: searchIcon, alt: "Search", classes: "w-10 h-10" },
          { text: "Export to Excel" },
          { text: "Add Document" },
          { isSelect: true, options: [{ value: "connect", label: "Connect" }] },
          { icon: bellIcon, alt: "Notifications", classes: "w-10 h-10" },
          { icon: settingsIcon, alt: "Settings", classes: "w-10 h-10" },
          { icon: userIcon, alt: "User", classes: "w-10 h-10" },
        ].map((item, index) => (
          <React.Fragment key={index}>
            {item.icon ? (
              <button className="bg-[#603AE51A] flex justify-center items-center rounded-lg p-3 cursor-pointer w-10 h-10">
                <img src={item.icon} alt={item.alt} className="w-4 h-4" />
              </button>
            ) : item.isSelect ? (
              <select className="bg-[#603AE51A] h-10 px-3 rounded-lg text-primary font-medium text-sm cursor-pointer">
                {item.options.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <button className="bg-[#603AE51A] h-10 px-3 rounded-lg text-primary font-medium text-sm cursor-pointer">
                {item.text}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>
    </header>
  );
};

export default Header;