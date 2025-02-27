"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", users: 1200, revenue: 5000 },
  { month: "Feb", users: 1500, revenue: 7000 },
  { month: "Mar", users: 1800, revenue: 8500 },
  { month: "Apr", users: 2000, revenue: 10000 },
  { month: "May", users: 2500, revenue: 13000 },               
];                                                                                                                           

export default function AnalyticsPage() {
  return (

    <div className="p-8 min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-extrabold tracking-wide text-center mb-10">📊 📊 Analytics Overview 📊 📊 </h1>            

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg border border-gray-700 text-center">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-4xl font-bold mt-2">5,430</p>
        </div>
                                     
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg border border-gray-700 text-center">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-4xl font-bold mt-2">$34,567</p>   
        </div>        

        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg border border-gray-700 text-center">
          <h3 className="text-lg font-semibold">New Signups</h3>
          <p className="text-4xl font-bold mt-2">1,230</p>   
        </div>  
      </div>
         
                                   
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg border border-gray-700 mt-10">
        <h2 className="text-2xl font-semibold mb-4">📦User Growth & Revenue</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} />
                <Bar dataKey="users" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="revenue" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
      </div>
    </div>
  );
}
                    