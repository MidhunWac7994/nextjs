"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiBarChart, FiSettings, FiMenu, FiHome, FiUsers, FiLogOut } from "react-icons/fi";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
  
      <aside
        className={`bg-white dark:bg-gray-800 shadow-lg p-6 w-64 fixed md:relative min-h-screen transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >     
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-700 dark:text-white">Dashboard</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            ✖️
          </button>
        </div>

        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer" onClick={() => router.push("/")}> 
            <FiHome size={20} /> <span>Home</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer" onClick={() => router.push("/Analytics")}> 
            <FiBarChart size={20} /> <span>Analytics</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer" onClick={() => router.push("/Users")}> 
            <FiUsers size={20} /> <span>Users</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer" onClick={() => router.push("/Settings")}> 
            <FiSettings size={20} /> <span>Settings</span>
          </li>
          <li className="flex items-center space-x-3 text-red-600 hover:text-red-500 cursor-pointer mt-6" onClick={() => alert("Logging out...")}> 
            <FiLogOut size={20} /> <span>Logout</span>
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-6">
        <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <FiMenu size={24} className="text-gray-700 dark:text-white" />
          </button>
          <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Welcome, User</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Logout</button>
        </nav>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-white">Dashboard Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your data and settings here.</p>
        </div>
      </main>
    </div>
  );
}
