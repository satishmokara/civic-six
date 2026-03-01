import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { MapPin, Calendar, User, Clock, Check, X, AlertOctagon } from 'lucide-react';

export function ReviewUI() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [comment, setComment] = useState('');

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <h1 className="text-2xl font-bold text-slate-900">Review Report</h1>
                        <Badge variant="warning">Pending</Badge>
                    </div>
                    <p className="text-slate-600">Report ID: {id || 'RPT-401'}</p>
                </div>
                <Button variant="outline" onClick={() => navigate('/official/reports')}>
                    Back to List
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Report Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <img
                                src="https://images.unsplash.com/photo-1542045618-cb1cb8a4fe00?auto=format&fit=crop&q=80&w=800"
                                alt="Issue evidence"
                                className="w-full h-80 object-cover rounded-lg border border-slate-200"
                            />

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Major Pipe Burst</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    There is a large pipe burst on the corner of 5th Avenue causing significant water pooling on the road. The pressure is quite high and it's starting to affect the nearby sidewalk.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                                <div className="space-y-1">
                                    <span className="text-sm font-medium text-slate-500 flex items-center gap-2">
                                        <User className="h-4 w-4" /> Reporter
                                    </span>
                                    <p className="text-slate-900">John Doe (Verified)</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-sm font-medium text-slate-500 flex items-center gap-2">
                                        <Calendar className="h-4 w-4" /> Date Submitted
                                    </span>
                                    <p className="text-slate-900">Oct 26, 2023 08:00 AM</p>
                                </div>
                                <div className="space-y-1 col-span-2">
                                    <span className="text-sm font-medium text-slate-500 flex items-center gap-2">
                                        <MapPin className="h-4 w-4" /> Location
                                    </span>
                                    <p className="text-slate-900">Sector 8, North Zone (Lat: 40.71, Lng: -74.00)</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="border-accent/30 bg-accent/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 text-accent mb-2">
                                <Clock className="h-5 w-5" />
                                <h3 className="font-bold">Action Required</h3>
                            </div>
                            <p className="text-sm text-slate-700 mb-4">
                                This is an urgent report. You have <span className="font-bold">2.5 hours</span> remaining to verify and take action before automatic escalation.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Official Action</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">Official Comments *</label>
                                <textarea
                                    className="flex min-h-[120px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Provide details about the verification or reason for rejection..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-3 pt-0">
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={!comment}>
                                <Check className="h-4 w-4 mr-2" />
                                Verify & Approve
                            </Button>
                            <div className="grid grid-cols-2 gap-3 w-full">
                                <Button variant="danger" disabled={!comment}>
                                    <X className="h-4 w-4 mr-2" />
                                    Reject
                                </Button>
                                <Button variant="outline" disabled={!comment}>
                                    <AlertOctagon className="h-4 w-4 mr-2" />
                                    Escalate
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
