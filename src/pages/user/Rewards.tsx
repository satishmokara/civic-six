import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Gift, Coins, Trophy } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';

const AVAILABLE_REWARDS = [
    { id: 1, name: 'Local Coffee Shop $5', cost: 50, color: 'bg-amber-100', icon: '☕' },
    { id: 2, name: 'Amazon Gift Card $10', cost: 100, color: 'bg-blue-100', icon: '🛒' },
    { id: 3, name: 'City Transit Pass', cost: 150, color: 'bg-emerald-100', icon: '🚌' },
    { id: 4, name: 'Bookstore Voucher $20', cost: 200, color: 'bg-purple-100', icon: '📚' },
];

export function Rewards() {
    const [balance] = useState(125);

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Rewards & Achievements</h1>
                <p className="text-slate-600">Redeem your civic coins for gift cards and vouchers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2 bg-gradient-to-br from-primary to-blue-700 text-white">
                    <CardContent className="p-8 flex items-center justify-between">
                        <div>
                            <p className="text-blue-100 font-medium mb-1">Current Balance</p>
                            <div className="flex items-center gap-3">
                                <Coins className="h-10 w-10 text-yellow-300" />
                                <span className="text-5xl font-bold">125</span>
                            </div>
                            <p className="text-sm text-blue-100 mt-4">
                                You are 25 coins away from a City Transit Pass!
                            </p>
                        </div>
                        <div className="hidden sm:block">
                            <Gift className="h-32 w-32 text-white/20" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-amber-500" />
                            Leaderboard
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-slate-400">1</span>
                                    <div className="h-8 w-8 rounded-full bg-slate-200"></div>
                                    <span className="font-medium text-slate-900">Sarah J.</span>
                                </div>
                                <span className="font-semibold text-primary">450</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-slate-400">2</span>
                                    <div className="h-8 w-8 rounded-full bg-slate-200"></div>
                                    <span className="font-medium text-slate-900">Mike L.</span>
                                </div>
                                <span className="font-semibold text-primary">320</span>
                            </div>
                            <div className="flex items-center justify-between bg-primary/5 p-2 rounded-lg -mx-2">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-primary">8</span>
                                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">You</div>
                                    <span className="font-medium text-slate-900">You</span>
                                </div>
                                <span className="font-semibold text-primary">125</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Available Rewards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {AVAILABLE_REWARDS.map((reward) => (
                        <Card key={reward.id} className="flex flex-col">
                            <CardContent className="pt-6">
                                <div className={`h-16 w-16 ${reward.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}>
                                    {reward.icon}
                                </div>
                                <h3 className="text-center font-bold text-slate-900 mb-1">{reward.name}</h3>
                                <div className="flex justify-center mb-4">
                                    <Badge variant="outline" className="flex items-center gap-1">
                                        <Coins className="h-3 w-3 text-amber-500" />
                                        {reward.cost} coins
                                    </Badge>
                                </div>
                            </CardContent>
                            <CardFooter className="mt-auto border-t border-slate-100 p-4">
                                <Button
                                    className="w-full"
                                    variant={balance >= reward.cost ? 'primary' : 'outline'}
                                    disabled={balance < reward.cost}
                                >
                                    {balance >= reward.cost ? 'Redeem Now' : 'Need More Coins'}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
