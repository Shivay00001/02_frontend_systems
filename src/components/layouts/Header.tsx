'use client';

import { Bell, Search, Menu } from 'lucide-react';

export function Header() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-dark-800 bg-dark-950 px-6">
            {/* Left side */}
            <div className="flex items-center">
                <button className="rounded-lg p-2 text-dark-400 hover:bg-dark-800 hover:text-white lg:hidden">
                    <Menu className="h-5 w-5" />
                </button>

                {/* Search */}
                <div className="ml-4 hidden lg:block">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dark-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input w-64 bg-dark-800 pl-10 text-white placeholder:text-dark-500 focus:ring-primary-500"
                        />
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
                {/* Notifications */}
                <button className="relative rounded-lg p-2 text-dark-400 hover:bg-dark-800 hover:text-white">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[10px] font-medium text-white">
                        3
                    </span>
                </button>

                {/* User avatar (mobile) */}
                <div className="lg:hidden">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20">
                        <span className="text-xs font-medium text-primary-400">AD</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
