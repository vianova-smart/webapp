import React from 'react';
import MetricsCard from './MetricsCard';
import { DashboardMetrics } from '../../types';

interface DashboardGridProps {
  metrics: DashboardMetrics;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricsCard
        title="Total Assets"
        value={metrics.totalAssets}
        type="total"
      />
      <MetricsCard
        title="Damaged Assets"
        value={metrics.damagedAssets}
        type="damaged"
      />
      <MetricsCard
        title="Critical Issues"
        value={metrics.criticalIssues}
        type="critical"
      />
      <MetricsCard
        title="Last Scan"
        value={metrics.lastScan}
        type="scan"
      />
    </div>
  );
};

export default DashboardGrid;