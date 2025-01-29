import React from 'react';
import { AlertTriangle, Database, AlertCircle, Clock } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: number | string;
  type: 'total' | 'damaged' | 'critical' | 'scan';
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, type }) => {
  const icons = {
    total: Database,
    damaged: AlertTriangle,
    critical: AlertCircle,
    scan: Clock,
  };

  const Icon = icons[type];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
        <Icon className="w-8 h-8 text-blue-500" />
      </div>
    </div>
  );
};

export default MetricsCard;