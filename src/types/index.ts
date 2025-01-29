export interface Asset {
  id: string;
  type: 'sign' | 'marking' | 'barrier' | 'pavement';
  location: {
    lat: number;
    lng: number;
  };
  condition: 'good' | 'fair' | 'poor' | 'critical';
  lastInspection: string;
  priority: 'low' | 'medium' | 'high';
  notes?: string;
}

export interface User {
  id: string;
  role: 'admin' | 'manager' | 'inspector' | 'viewer';
  name: string;
  email: string;
}

export interface DashboardMetrics {
  totalAssets: number;
  damagedAssets: number;
  criticalIssues: number;
  lastScan: string;
}