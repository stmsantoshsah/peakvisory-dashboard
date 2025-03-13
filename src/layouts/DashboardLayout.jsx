import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import QuickBookForm from "../components/QuickBookForm";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex justify-between xl:flex-nowrap flex-wrap">
      {/* Sidebar */}
      <div className="max-w-[84px] w-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="xl:max-w-full max-w-[calc(100%-84px)] w-full">
        <Header />
        <main className="bg-white rounded-[12px] mt-9 mx-5 py-6 px-5">
          {children}
        </main>
      </div>

      {/* QuickBook Form */}
      <div className="xl:max-w-[389px] max-w-[100%] w-full xl:mt-0 mt-6">
        <QuickBookForm />
      </div>
    </div>
  );
};

export default DashboardLayout;
