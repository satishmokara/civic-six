import { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Search, Filter, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_REPORTS = [
    {
        id: 'RPT-001',
        category: 'Road Damage',
        title: 'Large Pothole on Main St',
        status: 'pending',
        date: '2023-10-24T10:00:00Z',
        location: '123 Main St, Springfield',
        image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=400',
    },
    {
        id: 'RPT-002',
        category: 'Waste Disposal',
        title: 'Illegal Dumping in Park',
        status: 'verified',
        date: '2023-10-22T14:30:00Z',
        location: 'Centennial Park',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400',
    },
    {
        id: 'RPT-003',
        category: 'Streetlight',
        title: 'Broken Streetlight',
        status: 'resolved',
        date: '2023-10-15T19:15:00Z',
        location: 'Oak Ave & 4th St',
        image: 'https://images.unsplash.com/photo-1498677231914-50df6cb1600f?auto=format&fit=crop&q=80&w=400',
    },
];

export function MyReports() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    const filteredReports = MOCK_REPORTS.filter(report => {
        const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending': return <Badge variant="warning">Pending Review</Badge>;
            case 'verified': return <Badge variant="success">Verified</Badge>;
            case 'resolved': return <Badge variant="default">Resolved</Badge>;
            case 'rejected': return <Badge variant="danger">Rejected</Badge>;
            default: return <Badge>{status}</Badge>;
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">My Reports</h1>
                    <p className="text-slate-600">Track the status of your submitted issues.</p>
                </div>
                <Link to="/report/new">
                    <Button>Report New Issue</Button>
                </Link>
            </div>

            <Card>
                <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                                placeholder="Search reports..."
                                className="pl-9"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-slate-500" />
                            <select
                                className="h-10 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="all">All Statuses</option>
                                <option value="pending">Pending</option>
                                <option value="verified">Verified</option>
                                <option value="resolved">Resolved</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {filteredReports.map((report) => (
                            <div
                                key={report.id}
                                className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-sm transition-all bg-white group"
                            >
                                <img
                                    src={report.image}
                                    alt={report.title}
                                    className="w-full sm:w-48 h-32 object-cover rounded-lg flex-shrink-0"
                                />

                                <div className="flex-1 min-w-0 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-medium text-slate-500">{report.id}</span>
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                                                    {report.category}
                                                </span>
                                            </div>
                                            {getStatusBadge(report.status)}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 truncate">{report.title}</h3>

                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <MapPin className="h-4 w-4 text-slate-400" />
                                                <span className="truncate">{report.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <Calendar className="h-4 w-4 text-slate-400" />
                                                <span>{new Date(report.date).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:pl-4 sm:border-l border-slate-100 flex items-center justify-end sm:justify-center">
                                    <Button variant="ghost" className="w-full sm:w-auto text-primary hover:bg-primary/5 group-hover:bg-primary/10">
                                        View Details
                                        <ChevronRight className="h-4 w-4 ml-1" />
                                    </Button>
                                </div>
                            </div>
                        ))}

                        {filteredReports.length === 0 && (
                            <div className="text-center py-12">
                                <div className="bg-slate-50 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="h-8 w-8 text-slate-400" />
                                </div>
                                <h3 className="text-lg font-medium text-slate-900 mb-1">No reports found</h3>
                                <p className="text-slate-500">Try adjusting your filters or search term.</p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
