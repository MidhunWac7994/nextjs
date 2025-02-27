"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");

const a= 5;
const b=10;

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 py-12 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">⚙️ Settings</h1>

        <div className="space-y-6">

          <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
            <span className="text-lg font-semibold">🌙 Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-300 ${
                darkMode ? "bg-green-500 justify-end" : "bg-gray-500 justify-start"
              }`}
            >     
              <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
            </button>
          </div>

          <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
            <span className="text-lg font-semibold">🔔 Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-300 ${
                notifications ? "bg-blue-500 justify-end" : "bg-gray-500 justify-start"
              }`}
            >
              <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
            </button>
          </div>

          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
            <label className="block text-lg font-semibold mb-2">📝 Username</label>
            <input
              type="text"
              className="w-full p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
            <label className="block text-lg font-semibold mb-2">📧 Email</label>
            <input
              type="email"
              className="w-full p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
