import React from 'react'
import invoice from '../assets/invoice.png'
import BillList from './BillList'
const ExpensesReport = () => {
    return (
        <div>
            <button className='bg-primary font-[500] text-[14px] text-white rounded-[8px] p-3 cursor-pointer ml-auto flex'>Add to Expenses Report</button>
            <div className='flex mt-6 gap-6'>
                <BillList />
                <div className='border-[#ECECF2] border-1 p-[9px] border-dashed rounded-[20px]'>
                    <img src={invoice} alt="invoice" className='rounded-[20px] img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default ExpensesReport
