import React, { useState } from 'react';
import quickLogo from "../assets/quick.svg"
import { FaChevronDown, FaChevronUp, FaUserFriends } from 'react-icons/fa';

function QuickbooksSettings() {
    const [activeTab, setActiveTab] = useState("comment");
    const [paymentDetailsOpen, setPaymentDetailsOpen] = useState(true);
    const [descriptionOpen, setDescriptionOpen] = useState(false);

    return (
        <aside className="bg-white xl:py-[22px] py-[16px] px-6">
            <div className='border-[#ECECF2] border-1 p-4 mb-6'>
                <div className="flex items-center mb-4 justify-between ">
                    <div className='flex'>
                        <div className="w-[40px] h-[40px] bg-green-500 rounded-full flex justify-center items-center">
                            <img src={quickLogo} alt="quickLogo" />
                        </div>
                        <div>
                            <p className="font-semibold">Quickbook</p>
                            <p className="text-xs text-gray-500">16 June, 2024, 8:15 PM</p>
                        </div>
                    </div>
                    <div>
                        <p>Publishing...</p>
                        <p> Jimmy Jason</p>
                    </div>

                </div>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="auto-sync" className="form-checkbox h-5 w-5 text-green-500" />
                        <label htmlFor="auto-sync">Auto-sync</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="save-config" className="form-checkbox h-5 w-5 text-green-500" />
                        <label htmlFor="save-config">Save Config</label>
                    </div>
                </div>
            </div>
            <div className="">
                {/* Tabs */}
                <div className="flex">
                    <button
                        className={`w-1/2 py-2 font-semibold cursor-pointer ${activeTab === "comment"
                            ? "border-1 border-[#ECECF2] rounded-[8px] text-secondary"
                            : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("comment")}
                    >
                        Comment
                    </button>
                    <button
                        className={`w-1/2 py-2 font-semibold cursor-pointer ${activeTab === "query"
                            ? "border-1 border-[#ECECF2] rounded-[8px] text-secondary"
                            : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("query")}
                    >
                        Query
                    </button>
                </div>

                {/* Tab Content */}
                <div className="py-4">
                    {activeTab === "comment" && (
                        <div>
                            <div className='px-4'>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Type Comment
                                </label>
                                <input
                                    type="text"
                                    placeholder="Start typing…"
                                    className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px] pb-14 h-[40px]"
                                />
                            </div>
                            <button className="bg-[#F6F6F6] text-[#8181A5] py-2 px-4 rounded mt-6 w-full">
                                Add Comment
                            </button>
                        </div>
                    )}

                    {activeTab === "query" && (
                        <div>
                            <div className='px-4'>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Type Query
                                </label>
                                <input
                                    type="text"
                                    placeholder="Start typing…"
                                    className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px] pb-14 h-[40px]"
                                />
                            </div>
                            <button className="bg-[#F6F6F6] text-[#8181A5] py-2 px-4 rounded mt-6 w-full">
                                Add Query
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <button className="bg-primary text-white py-2 px-4 rounded w-full mb-4">View Line Items</button>

            <div className="">
                <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => setPaymentDetailsOpen(!paymentDetailsOpen)}>
                    <h3 className="text-md font-semibold">Payment Details</h3>
                    {paymentDetailsOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {paymentDetailsOpen && (
                    <div className="py-2">
                        <div className="flex items-center space-x-2 mb-2">
                            <input type="radio" id="paid" name="payment-status" className="form-radio h-5 w-5 text-blue-500" />
                            <label htmlFor="paid">Paid</label>
                            <input type="radio" id="unpaid" name="payment-status" className="form-radio h-5 w-5 text-blue-500" />
                            <label htmlFor="unpaid">Unpaid</label>
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Bill Number</label>
                            <input type="text" placeholder="Start Typing" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Bill Date</label>
                            <input type="text" placeholder="Start Typing" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Paid Amount</label>
                            <input type="text" placeholder="£ 1900.00" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Paid Date</label>
                            <input type="text" placeholder="Start Typing" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Due Date</label>
                            <input type="text" placeholder="Start Typing" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Payment Mode</label>
                            <input type="text" placeholder="Select Payment Mode" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Currency</label>
                            <input type="text" placeholder="Select Currency" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Bank Transaction Ref</label>
                            <input type="text" placeholder="Start Typing" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Total Amount</label>
                            <input type="text" placeholder="Start Typing" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Tax Amount</label>
                            <input type="text" placeholder="Start Typing" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Total Amount(GBP)</label>
                            <input type="text" placeholder="Start Typing" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Tax Amount (GBP)</label>
                            <input type="text" placeholder="Start Typing" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm mb-1">FX Rate</label>
                            <input type="text" placeholder="Start Typing" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                    </div>
                )}
            </div>

            <div className="">
                <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => setDescriptionOpen(!descriptionOpen)}>
                    <h3 className="text-md font-semibold">Description</h3>
                    {descriptionOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {descriptionOpen && (
                    <div className="py-2">
                        <div className="flex items-center space-x-2 mb-2">
                            <input type="radio" id="single" name="line-item" className="form-radio h-5 w-5 text-blue-500" />
                            <label htmlFor="single">Single</label>
                            <input type="radio" id="multiple" name="line-item" className="form-radio h-5 w-5 text-blue-500" />
                            <label htmlFor="multiple">Multiple</label>
                        </div>
                        <div className="mb-2">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Description</label>
                            <input type="text" placeholder="Enter Description" className="appearance-none border-b border-[#ECECF2] rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                    </div>
                )}
            </div>

            <div className="">
                <button className="bg-[#603AE51A] text-primary py-2 px-4 rounded w-full">Save</button>
                <button className="bg-primary text-white py-2 px-4 rounded w-full mt-3">Publish</button>
            </div>
        </aside>
    );
}

export default QuickbooksSettings;