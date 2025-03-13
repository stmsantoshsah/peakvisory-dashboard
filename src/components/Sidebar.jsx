import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import dashboard from "../assets/dashboard.svg";
import accountings from "../assets/accountings.svg";
import banking from "../assets/banking.svg";
import reports from "../assets/reports.svg";
import contacts from "../assets/contacts.svg";
import invoicing from "../assets/invoicing.svg";
import queries from "../assets/queries.svg";
import help from "../assets/questionmark.svg";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMenuClick = (menuId) => {
        if (isMobile) {
            setActiveMenu(activeMenu === menuId ? null : menuId);
        }
    };

    const sidebarData = {
        logo: logo,
        menus: [
            {
                id: 1,
                name: "Dashboard",
                icon: dashboard,
                path: "/dashboard",
                badge: "Overview",
                submenus: [
                    { id: 11, name: "Overview", path: "/dashboard/overview" },
                    { id: 12, name: "Activity", path: "/dashboard/activity" },
                ],
            },
            {
                id: 2,
                name: "Accounting",
                icon: accountings,
                path: "/accounting",
                badge: "Financial Data",
                submenus: [
                    { id: 21, name: "Bills", path: "/accounting/bills" },
                    { id: 22, name: "Receipts", path: "/accounting/receipts" },
                    { id: 23, name: "Reconcile", path: "/accounting/reconcile" },
                ],
            },
            {
                id: 3,
                name: "Banking",
                icon: banking,
                path: "/banking",
                badge: "Transactions",
                submenus: [
                    { id: 31, name: "Transactions", path: "/banking/transactions" },
                    { id: 32, name: "Accounts", path: "/banking/accounts" },
                ],
            },
            {
                id: 4,
                name: "Reports",
                icon: reports,
                path: "/reports",
                badge: "Analytics",
                submenus: [
                    { id: 41, name: "Sales Report", path: "/reports/sales" },
                    { id: 42, name: "Expense Report", path: "/reports/expenses" },
                    { id: 43, name: "Profit & Loss", path: "/reports/profit-loss" },
                ],
            },
            {
                id: 5,
                name: "Contacts",
                icon: contacts,
                path: "/contacts",
                badge: "People",
                submenus: [
                    { id: 51, name: "Clients", path: "/contacts/clients" },
                    { id: 52, name: "Suppliers", path: "/contacts/suppliers" },
                ],
            },
            {
                id: 6,
                name: "Invoicing",
                icon: invoicing,
                path: "/invoicing",
                badge: "Billing",
                submenus: [
                    { id: 61, name: "Create Invoice", path: "/invoicing/create" },
                    { id: 62, name: "Pending Invoices", path: "/invoicing/pending" },
                    { id: 63, name: "Paid Invoices", path: "/invoicing/paid" },
                ],
            },
            {
                id: 7,
                name: "Queries",
                icon: queries,
                path: "/queries",
                badge: "Support",
                submenus: [
                    { id: 71, name: "Customer Queries", path: "/queries/customers" },
                    { id: 72, name: "Technical Issues", path: "/queries/technical" },
                ],
            },
            {
                id: 8,
                name: "Help",
                icon: help,
                path: "/help",
                badge: "Guidance",
                submenus: [
                    { id: 81, name: "FAQ", path: "/help/faq" },
                    { id: 82, name: "Support", path: "/help/support" },
                ],
            },
        ],
    };

    return (
        <nav
            className={`relative min-h-[100vh] left-0 top-0 bg-primary transition-all duration-300 ${isExpanded ? "w-[84px]" : "w-[84px]"
                }`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => {
                setIsExpanded(false);
                if (!isMobile) setActiveMenu(null);
            }}
        >
            <div className="sidebar-logo py-[15px] flex justify-center">
                <Link to="/">
                    <img src={sidebarData.logo} alt="Company Logo" className="w-10 h-10" />
                </Link>
            </div>

            <ul className="sidebar-menu">
                {sidebarData.menus.map((menu) => (
                    <li
                        key={menu.id}
                        onMouseEnter={() => !isMobile && setActiveMenu(menu.id)}
                        onMouseLeave={() => !isMobile && setActiveMenu(null)}
                    >
                        <button
                            onClick={() => handleMenuClick(menu.id)}
                            className="flex items-center gap-3 py-[15px] hover:bg-[#9C85ED] flex-col border-l-2 border-transparent hover:border-white w-full"
                        >
                            <img src={menu.icon} alt={`${menu.name} Icon`} className="m-auto" />
                            <span className="text-white text-[14px]">{menu.name}</span>
                        </button>

                        {menu.submenus && activeMenu === menu.id && (
                            <div
                                className={`absolute left-[84px] z-10 top-0 ${isMobile ? "bg-[#9C85ED]" : "bg-[#9C85ED]"
                                    } h-full w-[200px] shadow-lg px-4 pt-2`}
                            >
                                <div className="bg-white text-primary text-sm px-2 py-2 rounded-[2px]">
                                    {menu.badge}
                                </div>
                                <ul>
                                    {menu.submenus.map((submenu) => (
                                        <li key={submenu.id} className="py-3 px-5 hover:bg-gray-600">
                                            <Link to={submenu.path} className="text-white">
                                                {submenu.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
