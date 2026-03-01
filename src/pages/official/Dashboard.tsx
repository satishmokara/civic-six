import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { AlertTriangle, Clock, Activity, CheckCircle, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OfficialDashboard() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <h1 className="text-2xl font-bold text-slate-900">Official Dashboard</h1>
                        <Badge className="bg-primary/10 text-primary">Ward Councillor</Badge>
                    </div>
                    <p className="text-slate-600">Welcome back, Officer Smith. You have <span className="font-semibold text-accent">3 urgent</span> reports pending.</p>
                </div>
                <Link to="/official/reports">
                    <Button variant="outline">View All Assigned</Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="border-accent/20 bg-accent/5">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-accent text-white rounded-lg">
                                <AlertTriangle className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-700">Urgent (24h)</p>
                                <h3 className="text-2xl font-bold text-accent">3</h3>
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
                                <p className="text-sm font-medium text-slate-600">Pending Review</p>
                                <h3 className="text-2xl font-bold text-slate-900">12</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                <Activity className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600">In Progress</p>
                                <h3 className="text-2xl font-bold text-slate-900">5</h3>
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
                                <p className="text-sm font-medium text-slate-600">Resolved aThis Week</p>
                                <h3 className="text-2xl font-bold text-slate-900">28</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Urgent Reports to Review</h2>
            <Card>
                <div className="divide-y divide-slate-100">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-slate-50 transition-colors gap-4">
                            <div className="flex items-start gap-4">
                                <div className="h-16 w-16 rounded-lg bg-slate-200 flex-shrink-0" />
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Badge variant="danger" className="text-[10px] px-1.5 py-0">2.5h remaining</Badge>
                                        <span className="text-xs font-semibold text-slate-500">RPT-{400 + i}</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900">Major Pipe Burst</h4>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                                        <MapPin className="h-3 w-3" />
                                        <span>Sector {7 + i}, North Zone</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto text-sm py-1.5 h-8">
                                    Review Now
                                    <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
