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
                    <div className='flex gap-2'>
                        <div className="w-[40px] h-[40px] bg-green-500 rounded-full flex justify-center items-center">
                            <img src={quickLogo} alt="quickLogo" />
                        </div>
                        <div>
                            <p className="font-[700] text-[16px] text-secondary">Quickbook</p>
                            <p className="text-[12px] text-lightgray font-[500]">16 June, 2024 <br /> 8:15 PM</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-lightgray font-[700] text-[12px] mb-2'>Publishing...</p>
                        <p className='text-lightgray font-[700] text-[12px]'> Jimmy Jason</p>
                    </div>

                </div>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="auto-sync" className="form-checkbox h-4 w-4 text-primary" />
                        <label htmlFor="auto-sync">Auto-sync</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="save-config"
                            className="form-checkbox h-4 w-4 text-white bg-primary border-gray-400 rounded checked:bg-primary checked:border-blue-500"
                        />

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
                            <button className="bg-[#F6F6F6] text-[#8181A5] text-[14px] font-[500] py-2 px-4 rounded-[8px] h-[46px] mt-6 w-full cursor-pointer">
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
                            <button className="bg-[#F6F6F6] text-[#8181A5] text-[14px] font-[500] py-2 px-4 rounded-[8px] h-[46px] mt-6 w-full cursor-pointer">
                                Add Query
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <button className="bg-primary text-white py-2 px-4 text-[14px] font-[500] rounded-[8px] h-[46px] w-full mb-4 cursor-pointer">View Line Items</button>

            <div className="">
                <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => setPaymentDetailsOpen(!paymentDetailsOpen)}>
                    <h3 className="text-[16px] font-[500] text-secondary">Payment Details</h3>
                    {paymentDetailsOpen ? <div className='w-6 h-6 bg-[#603AE51A] flex justify-center items-center'><FaChevronUp className='text-primary' /></div> : <div className='w-6 h-6 bg-[#603AE51A] flex justify-center items-center'><FaChevronDown className='text-primary' /></div>}
                </div>
                {paymentDetailsOpen && (
                    <div className="py-2">
                        <div className="flex items-center space-x-2 mb-6 gap-4">
                            <div className='flex items-center min-w-[110px] gap-2'>
                                <input type="radio" id="paid" name="payment-status" className="form-radio h-5 w-5 text-blue-500" />
                                <label htmlFor="paid">Paid</label>
                            </div>
                            <div className='flex items-center min-w-[110px] gap-2'>
                                <input type="radio" id="unpaid" name="payment-status" className="form-radio h-5 w-5 text-blue-500" />
                                <label htmlFor="unpaid">Unpaid</label>
                            </div>


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
                    <h3 className="text-[16px] font-[500] text-secondary">Description</h3>
                    {descriptionOpen ? <div className='w-6 h-6 bg-[#603AE51A] flex justify-center items-center'><FaChevronUp className='text-primary' /></div> : <div className='w-6 h-6 bg-[#603AE51A] flex justify-center items-center'><FaChevronDown className='text-primary' /></div>}
                </div>
                {descriptionOpen && (
                    <div className="py-2">
                        <div className="flex items-center space-x-2 mb-2 gap-4">
                            <div className='flex items-center gap-2 min-w-[110px]'>
                            <input type="radio" id="single" name="line-item" className="form-radio h-5 w-5 text-blue-500" />
                            <label htmlFor="single">Single</label>
                            </div>
                            <div className='flex items-center gap-2 min-w-[110px]'>
                            <input type="radio" id="multiple" name="line-item" className="form-radio h-5 w-5 text-blue-500" />
                            <label htmlFor="multiple">Multiple</label>
                            </div>
                            
                            
                        </div>
                        <div className="mb-6 mt-6 pt-6 border-t border-[#ECECF2]">
                            <label className="block text-lightgray text-[14px] font-[400] mb-1">Description</label>
                            <input type="text" placeholder="Enter Description" className="appearance-none  rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lightgray placeholder:font-[700] placeholder:text-[14px]" />
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-5 border-t pt-6 border-[#ECECF2]">
                <button className="bg-[#603AE51A] text-primary py-2 px-4 rounded-[8px] h-[46px] w-full cursor-pointer">Save</button>
                <button className="bg-primary text-white py-2 px-4 rounded-[8px] w-full mt-3 h-[46px] cursor-pointer flex items-center justify-center gap-2">
                    Publish
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        // style={{ background: 'red' }}
                    >
                        <rect width="18" height="18" rx="4" fill="white" fillOpacity="0.2" />
                        <path
                            d="M13.418 6.54297L9 10.9609L4.58203 6.54297L4.04297 7.08203L8.73047 11.7695L9 12.0273L9.26953 11.7695L13.957 7.08203L13.418 6.54297Z"
                            fill="white"
                        />
                    </svg>
                </button>

            </div>
        </aside>
    );
}

export default QuickbooksSettings;