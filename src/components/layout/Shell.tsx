import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export function Shell() {
    const location = useLocation();
    const isPublicPage = ['/', '/about', '/contact', '/login', '/register'].includes(location.pathname);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            {/* For authenticated routes, Sidebar would go here and wrap the Outlet */}
            {isPublicPage ? (
                <main className="flex-1 flex flex-col">
                    <Outlet />
                </main>
            ) : (
                <div className="flex-1 flex">
                    <Sidebar />
                    <main className="flex-1 overflow-y-auto w-full p-4 md:p-8">
                        <Outlet />
                    </main>
                </div>
            )}
        </div>
    );
}
