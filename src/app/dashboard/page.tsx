import { StatsCard } from '@/components/ui/StatsCard';
import {
    DollarSign,
    ShoppingCart,
    Package,
    Users,
    TrendingUp,
    TrendingDown,
} from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <p className="mt-1 text-sm text-dark-400">
                    Overview of your business metrics and performance.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="Total Revenue"
                    value="$45,231.89"
                    change={{ value: 12.5, trend: 'up' }}
                    icon={DollarSign}
                />
                <StatsCard
                    title="Orders"
                    value="356"
                    change={{ value: 8.2, trend: 'up' }}
                    icon={ShoppingCart}
                />
                <StatsCard
                    title="Products"
                    value="1,234"
                    change={{ value: 3.1, trend: 'down' }}
                    icon={Package}
                />
                <StatsCard
                    title="Active Users"
                    value="573"
                    change={{ value: 18.7, trend: 'up' }}
                    icon={Users}
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Revenue Chart Placeholder */}
                <div className="card border-dark-700 p-6">
                    <h3 className="text-lg font-semibold text-white">Revenue Overview</h3>
                    <p className="text-sm text-dark-400">Monthly revenue for the current year</p>
                    <div className="mt-4 flex h-64 items-center justify-center rounded-lg bg-dark-800">
                        <span className="text-dark-500">Chart Component</span>
                    </div>
                </div>

                {/* Orders Chart Placeholder */}
                <div className="card border-dark-700 p-6">
                    <h3 className="text-lg font-semibold text-white">Order Statistics</h3>
                    <p className="text-sm text-dark-400">Order volume by status</p>
                    <div className="mt-4 flex h-64 items-center justify-center rounded-lg bg-dark-800">
                        <span className="text-dark-500">Chart Component</span>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="card border-dark-700 p-6">
                <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                <p className="text-sm text-dark-400">Latest actions in the system</p>
                <div className="mt-4 space-y-4">
                    {[
                        { action: 'New order #ORD-001', user: 'John Doe', time: '2 min ago' },
                        { action: 'Product updated: Widget Pro', user: 'Jane Smith', time: '15 min ago' },
                        { action: 'User registered: mike@example.com', user: 'System', time: '1 hour ago' },
                        { action: 'Inventory low: Basic Gadget', user: 'System', time: '2 hours ago' },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between border-b border-dark-700 pb-4 last:border-0 last:pb-0"
                        >
                            <div>
                                <p className="font-medium text-white">{item.action}</p>
                                <p className="text-sm text-dark-400">By {item.user}</p>
                            </div>
                            <span className="text-sm text-dark-500">{item.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
