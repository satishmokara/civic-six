import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { AlertCircle } from 'lucide-react';

export function Login() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialRole = searchParams.get('role') === 'official' ? 'official' : 'citizen';

    const [role, setRole] = useState<'citizen' | 'official'>(initialRole);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    // Update role if URL search params change
    useEffect(() => {
        setRole(initialRole);
    }, [initialRole]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError('Please provide both email and password');
            return;
        }

        // In a real app, this would hit Supabase auth
        console.log('Logging in...', { role, ...formData });

        // Redirect based on role
        if (role === 'official') {
            navigate('/official/dashboard');
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-3xl font-bold text-slate-900">Welcome Back</CardTitle>
                    <p className="text-slate-600 mt-2">Log in to your civic account to continue.</p>
                </CardHeader>
                <CardContent>
                    <div className="flex bg-slate-100 p-1 rounded-lg mb-6">
                        <button
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'citizen' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                                }`}
                            onClick={() => setRole('citizen')}
                        >
                            Citizen
                        </button>
                        <button
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'official' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                                }`}
                            onClick={() => setRole('official')}
                        >
                            Official
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm flex items-center gap-2">
                                <AlertCircle className="h-4 w-4" />
                                {error}
                            </div>
                        )}

                        <Input
                            label="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />

                        <div className="space-y-1">
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="flex justify-end">
                                <a href="#" className="text-sm font-medium text-primary hover:text-blue-700">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <Button type="submit" className="w-full h-12 text-lg mt-6">
                            Log in as {role === 'citizen' ? 'Citizen' : 'Official'}
                        </Button>
                    </form>

                    <p className="text-center text-sm text-slate-600 mt-6">
                        Don't have an account?{' '}
                        <Link to={`/register?role=${role}`} className="font-semibold text-primary hover:text-blue-700">
                            Register now
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
