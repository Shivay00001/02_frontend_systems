import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: {
        default: 'ERP Dashboard',
        template: '%s | ERP Dashboard',
    },
    description: 'Enterprise Resource Planning Dashboard',
    keywords: ['ERP', 'Dashboard', 'Enterprise', 'Management'],
    authors: [{ name: 'Engineering Team' }],
    viewport: 'width=device-width, initial-scale=1',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#111827' },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <body className="min-h-screen bg-dark-50 font-sans antialiased dark:bg-dark-950">
                <div className="relative flex min-h-screen flex-col">
                    {children}
                </div>
            </body>
        </html>
    );
}
