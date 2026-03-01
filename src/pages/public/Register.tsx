import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { AlertCircle } from 'lucide-react';

export function Register() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialRole = searchParams.get('role') === 'official' ? 'official' : 'citizen';

    const [role, setRole] = useState<'citizen' | 'official'>(initialRole);

    // Update role if URL search params change
    useEffect(() => {
        setRole(initialRole);
    }, [initialRole]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        // Citizen specific
        village: '',
        city: '',
        district: '',
        state: '',
        // Official specific
        jobTitle: '',
    });

    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // In a real app, this would hit Supabase auth
        console.log('Registering...', { role, ...formData });

        // Redirect based on role
        if (role === 'official') {
            navigate('/official/dashboard');
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 p-4">
            <Card className="w-full max-w-xl">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-3xl font-bold text-slate-900">Create an Account</CardTitle>
                    <p className="text-slate-600 mt-2">Join civic to make a difference in your community.</p>
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
                            Official Official
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm flex items-center gap-2">
                                <AlertCircle className="h-4 w-4" />
                                {error}
                            </div>
                        )}

                        <div className="space-y-4">
                            <Input
                                label="Email Address"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Input
                                    label="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                            <h3 className="text-lg font-medium text-slate-900 mb-4">
                                {role === 'citizen' ? 'Location Details' : 'Professional Details'}
                            </h3>

                            {role === 'citizen' ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input
                                        label="Village / Area"
                                        name="village"
                                        value={formData.village}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <Input
                                        label="City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <Input
                                        label="District"
                                        name="district"
                                        value={formData.district}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <Input
                                        label="State"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-slate-700">Official Position / Role *</label>
                                        <select
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleInputChange}
                                            required
                                            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            <option value="" disabled>Select your official position</option>
                                            <option value="sarpanch">Sarpanch</option>
                                            <option value="vro">VRO (Village Revenue Officer)</option>
                                            <option value="mro">MRO (Mandal Revenue Officer)</option>
                                            <option value="gvmc">GVMC (Municipal Corporation Official)</option>
                                            <option value="ward_councillor">Ward Councillor</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Button type="submit" className="w-full h-12 text-lg mt-6">
                            Create Account
                        </Button>
                    </form>

                    <p className="text-center text-sm text-slate-600 mt-6">
                        Already have an account?{' '}
                        <Link to={`/login?role=${role}`} className="font-semibold text-primary hover:text-blue-700">
                            Log in instead
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
