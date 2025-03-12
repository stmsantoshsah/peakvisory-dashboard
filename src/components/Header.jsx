import React from "react";
import searchIcon from "../assets/searchico.svg";
import bellIcon from "../assets/bell.svg";
import userIcon from "../assets/user.svg";
import settingsIcon from "../assets/settings.svg";
import { Menu, X } from "lucide-react"; // Import icons for a mobile menu

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="flex items-center justify-between bg-white py-3 px-4 shadow-md w-full">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="review" className="text-sm font-medium">
            Review
          </label>
          <select id="review" className="border border-[#4D4CAC] rounded-lg py-1 px-3 h-9 text-sm">
            <option value="google">Google</option>
          </select>
        </div>
        <button className="bg-[#40E1FA1A] text-[#2CA01D] text-xs font-bold h-8 px-3 rounded-lg hidden md:block">
          Quickbook’s Data
        </button>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-2">
        {[
          { icon: searchIcon, alt: "Search" },
          { text: "Export to Excel" },
          { text: "Add Document" },
          { isSelect: true, options: [{ value: "connect", label: "Connect" }] },
          { icon: bellIcon, alt: "Notifications" },
          { icon: settingsIcon, alt: "Settings" },
          { icon: userIcon, alt: "User" },
        ].map((item, index) => (
          <React.Fragment key={index}>
            {item.icon ? (
              <button className="bg-[#603AE51A] flex justify-center items-center rounded-lg p-2 w-12 h-12">
                <img src={item.icon} alt={item.alt} className="w-4 h-4" />
              </button>
            ) : item.isSelect ? (
              <select className="bg-[#603AE51A] h-12 px-3 rounded-lg text-primary font-medium text-sm">
                {item.options.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <button className="bg-[#603AE51A] h-12 px-3 rounded-lg text-primary font-medium text-sm">
                {item.text}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 w-48 md:hidden">
          <button className="bg-[#603AE51A] h-12 px-3 rounded-lg text-primary font-medium text-sm">
            Export to Excel
          </button>
          <button className="bg-[#603AE51A] h-12 px-3 rounded-lg text-primary font-medium text-sm">
            Add Document
          </button>
          <select className="bg-[#603AE51A] h-12 px-3 rounded-lg text-primary font-medium text-sm">
            <option value="connect">Connect</option>
          </select>
          <button className="bg-[#603AE51A] flex justify-center items-center rounded-lg p-2 w-12 h-12">
            <img src={bellIcon} alt="Notifications" className="w-4 h-4" />
          </button>
          <button className="bg-[#603AE51A] flex justify-center items-center rounded-lg p-2 w-12 h-12">
            <img src={settingsIcon} alt="Settings" className="w-4 h-4" />
          </button>
          <button className="bg-[#603AE51A] flex justify-center items-center rounded-lg p-2 w-12 h-12">
            <img src={userIcon} alt="User" className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
