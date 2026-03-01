import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { PlusCircle, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export function Dashboard() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Welcome back, Citizen</h1>
                    <p className="text-slate-600">Here's an overview of your civic engagement.</p>
                </div>
                <Button className="gap-2">
                    <PlusCircle className="h-5 w-5" />
                    Report New Issue
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                <AlertCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600">Total Reports</p>
                                <h3 className="text-2xl font-bold text-slate-900">12</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600">Resolved Issues</p>
                                <h3 className="text-2xl font-bold text-slate-900">8</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
                                <Clock className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600">Pending</p>
                                <h3 className="text-2xl font-bold text-slate-900">4</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Recent Activity</h2>
            <Card>
                <div className="divide-y divide-slate-100">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-slate-200 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-slate-900">Pothole on Main Street</h4>
                                    <p className="text-sm text-slate-600">Reported 2 days ago • Road Damage</p>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                                    Resolved
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
