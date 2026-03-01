import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { BarChart3, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export function Analytics() {
    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Performance Analytics</h1>
                <p className="text-slate-600">Track your resolution times and department efficiency.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                <Clock className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600">Avg Response Time</p>
                                <h3 className="text-2xl font-bold text-slate-900">4.2 hours</h3>
                            </div>
                        </div>
                        <p className="text-sm text-emerald-600 flex items-center gap-1 mt-4 font-medium">
                            <TrendingUp className="h-4 w-4" /> 12% faster than last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600">Resolution Rate</p>
                                <h3 className="text-2xl font-bold text-slate-900">94.5%</h3>
                            </div>
                        </div>
                        <p className="text-sm text-emerald-600 flex items-center gap-1 mt-4 font-medium">
                            <TrendingUp className="h-4 w-4" /> Top 5% in city
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                                <BarChart3 className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600">Total Processed (YTD)</p>
                                <h3 className="text-2xl font-bold text-slate-900">428</h3>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">Across 5 active zones</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Issues by Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* Mocking a chart with progress bars */}
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-slate-700">Road Damage</span>
                                    <span className="text-slate-500">45%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[45%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-slate-700">Waste Disposal</span>
                                    <span className="text-slate-500">30%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[30%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-slate-700">Water / Drainage</span>
                                    <span className="text-slate-500">15%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 w-[15%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-slate-700">Streetlights</span>
                                    <span className="text-slate-500">10%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 w-[10%]"></div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
