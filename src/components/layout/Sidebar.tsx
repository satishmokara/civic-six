import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    Home,
    PlusCircle,
    List,
    Gift,
    User,
    Bell,
    HelpCircle,
    Briefcase,
    BarChart3,
    LogOut
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarItem {
    icon: React.ElementType;
    label: string;
    href: string;
}

const userRoutes: SidebarItem[] = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: PlusCircle, label: 'New Report', href: '/report/new' },
    { icon: List, label: 'My Reports', href: '/reports' },
    { icon: Gift, label: 'Rewards', href: '/rewards' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Bell, label: 'Notifications', href: '/notifications' },
    { icon: HelpCircle, label: 'Help', href: '/help' },
];

const officialRoutes: SidebarItem[] = [
    { icon: Home, label: 'Dashboard', href: '/official/dashboard' },
    { icon: Briefcase, label: 'Assigned Reports', href: '/official/reports' },
    { icon: BarChart3, label: 'Analytics', href: '/official/analytics' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Bell, label: 'Notifications', href: '/notifications' },
    { icon: HelpCircle, label: 'Help', href: '/help' },
];

export function Sidebar() {
    const location = useLocation();

    // Determine the active portal based on the current path
    const isOfficialPortal = location.pathname.startsWith('/official');
    const routes = isOfficialPortal ? officialRoutes : userRoutes;

    return (
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex h-full min-h-[calc(100vh-4rem)]">
            <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
                {routes.map((route) => (
                    <NavLink
                        key={route.href}
                        to={route.href}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            )
                        }
                    >
                        <route.icon className="h-5 w-5" />
                        {route.label}
                    </NavLink>
                ))}
            </div>
            <div className="p-4 border-t border-slate-200">
                <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="h-5 w-5" />
                    Log out
                </button>
            </div>
        </aside>
    );
}
