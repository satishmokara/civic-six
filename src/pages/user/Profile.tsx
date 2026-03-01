import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { User } from 'lucide-react';

export function Profile() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
                <p className="text-slate-600">Manage your personal information and preferences.</p>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Personal Information</CardTitle>
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                    </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
                        <div className="h-24 w-24 rounded-full bg-slate-200 flex flex-col items-center justify-center relative overflow-hidden group border-4 border-white shadow-sm">
                            <User className="h-10 w-10 text-slate-400" />
                            {isEditing && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-xs font-medium">Change</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">John Doe</h3>
                            <p className="text-slate-500 text-sm">Citizen • Member since Oct 2023</p>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                label="Full Name"
                                defaultValue="John Doe"
                                disabled={!isEditing}
                            />
                            <Input
                                label="Email Address"
                                type="email"
                                defaultValue="john.doe@example.com"
                                disabled={!isEditing}
                            />
                            <Input
                                label="Phone Number"
                                type="tel"
                                defaultValue="+1 (555) 123-4567"
                                disabled={!isEditing}
                            />
                            <Input
                                label="Location"
                                defaultValue="Springfield"
                                disabled={!isEditing}
                            />
                        </div>

                        {isEditing && (
                            <div className="pt-4 flex justify-end">
                                <Button type="button" onClick={() => setIsEditing(false)}>
                                    Save Changes
                                </Button>
                            </div>
                        )}
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
