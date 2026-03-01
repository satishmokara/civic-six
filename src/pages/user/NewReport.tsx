import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, MapPin, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const CATEGORIES = [
    'Pothole / Road Damage',
    'Water / Drainage Issue',
    'Improper Waste Disposal',
    'Streetlight Outage',
    'Public Property Damage',
    'Other',
];

export function NewReport() {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState<string | null>(null);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [location, setLocation] = useState('Detecting location...');

    // Mock location detection
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLocation('123 Main St, Springfield (Lat: 40.71, Lng: -74.00)');
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const url = URL.createObjectURL(e.target.files[0]);
            setPhoto(url);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Mock submission delay
        setTimeout(() => {
            setIsSubmitting(false);
            navigate('/dashboard');
        }, 2000);
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Report an Issue</h1>
                <p className="text-slate-600">Help improve your community by reporting local problems.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>Issue Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">

                        {/* Photo Upload Section */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Photo Evidence *</label>
                            {!photo ? (
                                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors relative">
                                    <Camera className="h-10 w-10 text-slate-400 mb-2" />
                                    <p className="text-sm font-medium text-slate-900 mb-1">Click to take a photo or upload</p>
                                    <p className="text-xs text-slate-500">Must involve a clear view of the issue</p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        capture="environment"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={handlePhotoUpload}
                                        required
                                    />
                                </div>
                            ) : (
                                <div className="relative rounded-lg overflow-hidden border border-slate-200">
                                    <img src={photo} alt="Report evidence" className="w-full h-64 object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => setPhoto(null)}
                                        className="absolute top-2 right-2 p-1.5 bg-white text-slate-900 rounded-full shadow-sm hover:bg-slate-100"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Category */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Category *</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select a category...</option>
                                {CATEGORIES.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Description</label>
                            <textarea
                                className="flex min-h-[100px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Describe the issue in detail..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Location *</label>
                            <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-md">
                                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-sm text-slate-700">{location}</span>
                            </div>
                            <p className="text-xs text-slate-500">GPS location is automatically captured from your device.</p>
                        </div>

                    </CardContent>
                    <CardFooter className="flex justify-between border-t border-slate-100 mt-6 pt-6 bg-slate-50">
                        <Button type="button" variant="ghost" onClick={() => navigate('/dashboard')}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="primary" isLoading={isSubmitting}>
                            Submit Report
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}
