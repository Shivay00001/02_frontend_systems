'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    Package,
    Settings,
    BarChart3,
    LogOut,
} from 'lucide-react';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Users', href: '/dashboard/users', icon: Users },
    { name: 'Orders', href: '/dashboard/orders', icon: ShoppingCart },
    { name: 'Inventory', href: '/dashboard/inventory', icon: Package },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-64 flex-col border-r border-dark-800 bg-dark-950">
            {/* Logo */}
            <div className="flex h-16 items-center border-b border-dark-800 px-6">
                <span className="text-xl font-bold text-white">
                    ERP<span className="text-primary-500">Dashboard</span>
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-3 py-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                'group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                                isActive
                                    ? 'bg-primary-500/10 text-primary-400'
                                    : 'text-dark-400 hover:bg-dark-800 hover:text-white'
                            )}
                        >
                            <item.icon
                                className={clsx(
                                    'mr-3 h-5 w-5 flex-shrink-0 transition-colors',
                                    isActive ? 'text-primary-400' : 'text-dark-500 group-hover:text-white'
                                )}
                            />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* User Section */}
            <div className="border-t border-dark-800 p-4">
                <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20">
                        <span className="text-sm font-medium text-primary-400">AD</span>
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-white">Admin User</p>
                        <p className="text-xs text-dark-500">admin@example.com</p>
                    </div>
                    <button className="rounded-lg p-2 text-dark-500 hover:bg-dark-800 hover:text-white">
                        <LogOut className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
