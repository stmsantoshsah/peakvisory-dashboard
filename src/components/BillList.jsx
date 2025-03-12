import React, { useState } from 'react';
import billssmall from '../assets/billssmall.svg';

function BillList() {
  const [activeTab, setActiveTab] = useState('All Document');

  const allBills = [
    { id: 1, name: 'Bill 1', date: 'Nov 1, 2019', amount: '£ 50.59', type: 'Bill' },
    { id: 2, name: 'Receipt 1', date: 'Nov 1, 2019', amount: '£ 20.00', type: 'Receipt' },
    { id: 3, name: 'Bill 2', date: 'Nov 1, 2019', amount: '£ 50.59', type: 'Bill' },
    { id: 4, name: 'Receipt 2', date: 'Nov 1, 2019', amount: '£ 30.00', type: 'Receipt' },
    { id: 5, name: 'Bill 3', date: 'Nov 1, 2019', amount: '£ 50.59', type: 'Bill' },
  ];

  const filteredBills =
    activeTab === 'All Document' ? allBills : allBills.filter((bill) => bill.type === activeTab);

  return (
    <aside className="xl:max-w-[350px] max-w-[300px] w-full">
      <nav>
        <div className="flex space-x-2 mb-4">
          {['All Document', 'Bill', 'Receipt'].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 rounded font-semibold transition-colors duration-200 ${
                activeTab === tab ? 'text-secondary border-1 border-[#ECECF2]' : 'hover:bg-gray-200 text-lightgray'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <ul>
          {filteredBills.map((bill) => (
            <li key={bill.id} className="py-2 border border-[#EEEEEE] first:rounded-t-[12px] last:rounded-b-[12px]">
              <a href="#" className="block hover:bg-gray-100 rounded-md p-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-md mr-2">
                    <img src={billssmall} alt="billssmall" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{bill.name}</p>
                    <p className="text-xs text-gray-500">{bill.date}</p>
                    <p className="text-xs text-gray-500">{bill.amount}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default BillList;
