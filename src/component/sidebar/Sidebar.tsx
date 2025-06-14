"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUsers,
  FaBox,
  FaMoneyBill,
  FaCog,
  FaClipboardList,
  FaStore,
  FaComments,
} from "react-icons/fa";

const userRole = {
  superAdmin: [
    { label: "Dashboard", href: "/super-admin/dashboard", icon: <FaTachometerAlt /> },
    { label: "Manage Admins", href: "/super-admin/admins", icon: <FaUsers /> },
    { label: "Site Settings", href: "/super-admin/settings", icon: <FaCog /> },
  ],
    admin: [
    { label: "Dashboard", href: "/admin/dashboard", icon: <FaTachometerAlt /> },
    { label: "Users", href: "/admin/users", icon: <FaUsers /> },
    { label: "Orders", href: "/admin/orders", icon: <FaClipboardList /> },
  ],
  vendors: [
    { label: "Dashboard", href: "/vendors/dashboard", icon: <FaTachometerAlt /> },
    { label: "My Products", href: "/vendors/products", icon: <FaBox /> },
    { label: "Sales Report", href: "/vendors/sales", icon: <FaMoneyBill /> },
  ],
  accounts: [
    { label: "Dashboard", href: "/accounts/dashboard", icon: <FaTachometerAlt /> },
    { label: "Transactions", href: "/accounts/transactions", icon: <FaMoneyBill /> },
    { label: "Payouts", href: "/accounts/payouts", icon: <FaStore /> },
  ],
  moderators: [
    { label: "Dashboard", href: "/moderators/dashboard", icon: <FaTachometerAlt /> },
    { label: "Reviews", href: "/moderators/reviews", icon: <FaComments /> },
    { label: "Reports", href: "/moderators/reports", icon: <FaClipboardList /> },
  ],
} as const;

type Role = keyof typeof userRole;

const roleAlias: Record<string, Role> = {
  superAdmin: "superAdmin",
  vendor: "vendors",
  account: "accounts",
  moderator: "moderators",
};

interface SidebarProps {
  role: string; // Accept string to allow flexibility
}

const Sidebar = ({ role }: SidebarProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Normalize the role if alias is used
  const normalizedRole = roleAlias[role] || (role as Role);
  const navItems = userRole[normalizedRole] || [];

  console.log("Sidebar rendered for role:", normalizedRole);
  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden p-4 flex justify-between items-center bg-gray-800 text-white">
        <h2 className="text-xl font-bold capitalize">{normalizedRole} Panel</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block bg-gray-800 text-white w-64 min-h-screen p-4 fixed top-0 left-0 z-50`}
      >
        <h2 className="text-2xl font-bold mb-6 capitalize">{normalizedRole} Panel</h2>
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 transition ${
                pathname === item.href ? "bg-gray-700 font-semibold" : ""
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}
    </>
  );
};

export default Sidebar;
