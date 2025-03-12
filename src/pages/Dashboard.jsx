import React from 'react'
import Sidebar from "../components/Sidebar"
import Header from '../components/Header'
import QuickBookForm from '../components/QuickBookForm'
import ExpensesReport from '../components/ExpensesReport'
const Dashboard = () => {
    return (
        <div className='flex justify-between xl:flex-nowrap flex-wrap'>
            <div className='max-w-[84px] w-full'>
                <Sidebar />
            </div>
            <div className='xl:max-w-full max-w-[calc(100%-84px)] w-full'>
                <Header />
                <main className='bg-white rounded-[12px] mt-9 mx-5 py-6 px-5'>
                    <ExpensesReport/>
                </main>
            </div>
            <div className='xl:max-w-[389px] max-w-[100%] w-full'>
                <QuickBookForm />
            </div>
        </div>
    )
}

export default Dashboard
