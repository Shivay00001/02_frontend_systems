import { TrendingUp, TrendingDown } from 'lucide-react';
import { clsx } from 'clsx';

interface StatsCardProps {
    title: string;
    value: string;
    change?: {
        value: number;
        trend: 'up' | 'down';
    };
    icon: React.ComponentType<{ className?: string }>;
}

export function StatsCard({ title, value, change, icon: Icon }: StatsCardProps) {
    return (
        <div className="card border-dark-700 p-6">
            <div className="flex items-center justify-between">
                <div className="rounded-lg bg-primary-500/10 p-3">
                    <Icon className="h-5 w-5 text-primary-400" />
                </div>
                {change && (
                    <div
                        className={clsx(
                            'flex items-center text-sm font-medium',
                            change.trend === 'up' ? 'text-success-500' : 'text-error-500'
                        )}
                    >
                        {change.trend === 'up' ? (
                            <TrendingUp className="mr-1 h-4 w-4" />
                        ) : (
                            <TrendingDown className="mr-1 h-4 w-4" />
                        )}
                        {change.value}%
                    </div>
                )}
            </div>
            <div className="mt-4">
                <p className="text-sm font-medium text-dark-400">{title}</p>
                <p className="mt-1 text-2xl font-bold text-white">{value}</p>
            </div>
        </div>
    );
}
