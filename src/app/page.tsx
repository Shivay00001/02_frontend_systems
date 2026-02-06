import Link from 'next/link';
import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    Package,
    Settings
} from 'lucide-react';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-950 to-primary-950">
            {/* Navigation */}
            <nav className="border-b border-dark-800 bg-dark-900/50 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-white">
                                ERP<span className="text-primary-500">Dashboard</span>
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/dashboard"
                                className="btn-primary btn-md"
                            >
                                Go to Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Enterprise Resource
                        <span className="block text-primary-400">Planning System</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-dark-300">
                        A production-grade admin dashboard demonstrating modern React patterns,
                        TypeScript, and enterprise UI architecture.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/dashboard"
                            className="btn-primary btn-lg"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/dashboard/users"
                            className="btn-ghost btn-lg text-dark-300 hover:text-white"
                        >
                            View Users →
                        </Link>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <FeatureCard
                        icon={LayoutDashboard}
                        title="Dashboard"
                        description="Real-time metrics and analytics"
                    />
                    <FeatureCard
                        icon={Users}
                        title="User Management"
                        description="RBAC and team organization"
                    />
                    <FeatureCard
                        icon={ShoppingCart}
                        title="Orders"
                        description="Full order lifecycle management"
                    />
                    <FeatureCard
                        icon={Package}
                        title="Inventory"
                        description="Stock tracking and alerts"
                    />
                </div>
            </main>
        </div>
    );
}

function FeatureCard({
    icon: Icon,
    title,
    description,
}: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}) {
    return (
        <div className="card border-dark-800 bg-dark-900/50 p-6 transition-all hover:border-primary-500/50">
            <div className="mb-4 inline-flex rounded-lg bg-primary-500/10 p-3">
                <Icon className="h-6 w-6 text-primary-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-dark-400">{description}</p>
        </div>
    );
}
