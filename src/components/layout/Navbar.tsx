import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const isPublicPage = ['/', '/about', '/contact', '/login', '/register'].includes(location.pathname);

    // If not on a public page, this navbar might just show a mobile trigger or user profile
    // For the initial setup, let's keep it simple for public pages
    if (!isPublicPage) return null;

    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Landmark className="h-6 w-6 text-primary" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900">Civic</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-slate-600 hover:text-primary transition-colors font-medium">Home</Link>
                        <Link to="/about" className="text-slate-600 hover:text-primary transition-colors font-medium">About</Link>
                        <Link to="/contact" className="text-slate-600 hover:text-primary transition-colors font-medium">Contact</Link>
                        <div className="flex items-center space-x-4 ml-4">
                            <Link to="/login">
                                <Button variant="ghost">Log in</Button>
                            </Link>
                            <Link to="/register">
                                <Button variant="primary">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            to="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="pt-4 flex flex-col gap-2">
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                <Button variant="outline" className="w-full">Log in</Button>
                            </Link>
                            <Link to="/register" onClick={() => setIsOpen(false)}>
                                <Button variant="primary" className="w-full">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
