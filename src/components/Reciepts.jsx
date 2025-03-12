import React from 'react'

const Reciepts = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="text-lg font-medium text-gray-700">EasyUpload</div>
                <div className="flex space-x-4">
                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        Bills
                    </button>
                    <button className="text-indigo-700 font-semibold focus:outline-none border-b-2 border-indigo-700">
                        Receipts
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        Bank
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Document Owner */}
            <div className="mb-4">
                <div className="text-sm text-gray-500 mb-1">Document Owner</div>
                <div className="text-base font-medium text-gray-800">Accountant 01</div>
            </div>

            {/* Client */}
            <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">Client</div>
                <div className="flex items-center justify-between">
                    <div className="text-base text-gray-500">Select Client</div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <hr className="mt-1" />
            </div>

            {/* Drag & Drop Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-indigo-50 rounded-full p-4 mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L8.5 9.793V3a1 1 0 012 0v6.793l.793-.793a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="text-gray-700 font-medium">
                        Drag & Drop or Choose file to upload
                    </div>
                    <div className="text-sm text-gray-500">JPG, PNG, PDF, CVS</div>
                </div>
            </div>

            {/* Add Receipt Button */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md py-3 w-full focus:outline-none">
                Add Receipt
            </button>

            {/* Send Over Email */}
            <div className="mt-8">
                <div className="text-sm text-gray-500 mb-2">Send Over Email</div>

                {/* Single Email */}
                <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-700">
                        Single: <span className="text-indigo-600">abc.single@gmail.com</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002-2h2a2 2 0 002 2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h4m-4 0a2 2 0 012-2h2a2 2 0 012 2"
                            />
                        </svg>
                    </button>
                </div>

                {/* Multiple Email */}
                <div className="flex items-center justify-between">
                    <div className="text-gray-700">
                        Multiple: <span className="text-indigo-600">abc.multiple@gmail.com</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002-2h2a2 2 0 002 2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h4m-4 0a2 2 0 012-2h2a2 2 0 012 2"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reciepts
