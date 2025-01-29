import React from 'react';
import { LayoutDashboard, Map, Database, Search, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Map, label: 'Asset Map', path: '/map' },
    { icon: Database, label: 'Asset Management', path: '/assets' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600">VIANOVA</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="absolute bottom-0 w-full p-4">
        <button className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full">
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;