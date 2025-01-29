import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardGrid from './components/Dashboard/DashboardGrid';

function App() {
  // Mock data - In a real app, this would come from an API
  const mockMetrics = {
    totalAssets: 1234,
    damagedAssets: 56,
    criticalIssues: 12,
    lastScan: '2024-03-14 15:30',
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome to VIANOVA Road Asset Management Platform</p>
        </div>
        
        <DashboardGrid metrics={mockMetrics} />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {/* Activity items would go here */}
              <p className="text-gray-600">No recent activities</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Critical Issues</h2>
            <div className="space-y-4">
              {/* Critical issues would go here */}
              <p className="text-gray-600">No critical issues found</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;