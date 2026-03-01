import { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Search, Filter, MapPin, Calendar, Clock, AlertCircle } from 'lucide-react';

const ASSIGNED_REPORTS = [
    {
        id: 'RPT-401',
        category: 'Water / Drainage',
        title: 'Major Pipe Burst',
        status: 'urgent',
        date: '2023-10-26T08:00:00Z',
        location: 'Sector 8, North Zone',
        deadline: '2.5h',
        image: 'https://images.unsplash.com/photo-1542045618-cb1cb8a4fe00?auto=format&fit=crop&q=80&w=400',
    },
    {
        id: 'RPT-385',
        category: 'Road Damage',
        title: 'Deep Pothole on Highway',
        status: 'pending',
        date: '2023-10-25T14:30:00Z',
        location: 'Route 66, Mile 42',
        deadline: '18h',
        image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=400',
    },
];

export function AssignedReports() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Assigned Reports</h1>
                    <p className="text-slate-600">Review and manage issues assigned to your jurisdiction.</p>
                </div>
            </div>

            <Card>
                <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                                placeholder="Search by ID, category or location..."
                                className="pl-9"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-slate-500" />
                            <select className="h-10 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
                                <option value="urgency">Sort by Urgency</option>
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-y border-slate-200">
                                <tr>
                                    <th className="px-4 py-3">Report ID/Info</th>
                                    <th className="px-4 py-3">Location</th>
                                    <th className="px-4 py-3">Reported On</th>
                                    <th className="px-4 py-3 text-center">Deadline</th>
                                    <th className="px-4 py-3 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ASSIGNED_REPORTS.map((report) => (
                                    <tr key={report.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <img src={report.image} alt="" className="w-12 h-12 rounded object-cover" />
                                                <div>
                                                    <div className="font-medium text-slate-900">{report.id}</div>
                                                    <div className="text-slate-500">{report.category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-1.5 text-slate-600">
                                                <MapPin className="h-4 w-4 text-slate-400" />
                                                {report.location}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-1.5 text-slate-600">
                                                <Calendar className="h-4 w-4 text-slate-400" />
                                                {new Date(report.date).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${report.status === 'urgent' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                                                }`}>
                                                {report.status === 'urgent' ? <AlertCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                                                {report.deadline} left
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-right">
                                            <Button size="sm">Review</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
