import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import QuickBookForm from '../components/QuickBookForm';
import ExpensesReport from '../components/ExpensesReport';

const Dashboard = () => {
    const [selectedMenu, setSelectedMenu] = useState("Dashboard");

    // Sidebar se selected option ka data yahan ayega
    const handleMenuSelect = (menuName) => {
        setSelectedMenu(menuName);
    };

    // Yeh function selectedMenu ke basis pe different components dikhayega
    const renderContent = () => {
        switch (selectedMenu) {
            case "Dashboard":
                return <ExpensesReport />;
            case "Accounting":
                return <div>Accounting Data Here</div>;
            case "Banking":
                return <div>Banking Transactions Here</div>;
            case "Reports":
                return <div>Reports Data Here</div>;
            case "Contacts":
                return <div>Contacts Information Here</div>;
            case "Invoicing":
                return <div>Invoices and Payments Here</div>;
            case "Queries":
                return <div>Customer Queries Here</div>;
            case "Help":
                return <div>Help & Support Content Here</div>;
            default:
                return <ExpensesReport />;
        }
    };

    return (
        <div className='flex justify-between xl:flex-nowrap flex-wrap'>
            <div className='max-w-[84px] w-full'>
                <Sidebar onSelectMenu={handleMenuSelect} />
            </div>
            <div className='xl:max-w-full max-w-[calc(100%-84px)] w-full'>
                <Header />
                <main className='bg-white rounded-[12px] mt-9 mx-5 py-6 px-5'>
                    {renderContent()}
                </main>
            </div>
            <div className='xl:max-w-[389px] max-w-[100%] w-full xl:mt-0 mt-6'>
                <QuickBookForm />
            </div>
        </div>
    );
};

export default Dashboard;
