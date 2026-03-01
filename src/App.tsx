import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './components/ui/Button';
import { Shell } from './components/layout/Shell';
import { Dashboard } from './pages/user/Dashboard';
import { NewReport } from './pages/user/NewReport';
import { MyReports } from './pages/user/MyReports';
import { Rewards } from './pages/user/Rewards';
import { Profile } from './pages/user/Profile';
import { OfficialDashboard } from './pages/official/Dashboard';
import { AssignedReports } from './pages/official/AssignedReports';
import { Analytics } from './pages/official/Analytics';
import { ReviewUI } from './pages/official/ReviewUI';
import { Register } from './pages/public/Register';
import { Login } from './pages/public/Login';

function Home() {
  return (
    <div
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 relative bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000')` }}
    >
      {/* Dark overlay with slight blur */}
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl">
            Empowering citizens to improve their <span className="text-blue-400">communities</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Report local infrastructure issues, track progress, and earn rewards for civic engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8"
        >
          <div className="bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-800 hover:border-slate-700 transition-colors text-left flex flex-col h-full">
            <h2 className="text-2xl font-bold text-white mb-2">For Citizens</h2>
            <p className="text-slate-400 mb-8 flex-1">Report issues, track resolution, and earn rewards for improving your neighborhood.</p>
            <div className="space-y-3 mt-auto">
              <Link to="/login?role=citizen" className="block">
                <Button className="w-full text-lg h-12 bg-white text-slate-900 hover:bg-slate-100">Citizen Login</Button>
              </Link>
              <Link to="/register?role=citizen" className="block">
                <Button variant="outline" className="w-full text-lg h-12 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">Register as Citizen</Button>
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-800 hover:border-slate-700 transition-colors text-left flex flex-col h-full">
            <h2 className="text-2xl font-bold text-white mb-2">For Officials</h2>
            <p className="text-slate-400 mb-8 flex-1">Manage assigned reports, track departmental metrics, and communicate with citizens.</p>
            <div className="space-y-3 mt-auto">
              <Link to="/login?role=official" className="block">
                <Button className="w-full text-lg h-12 bg-white text-slate-900 hover:bg-slate-100">Official Login</Button>
              </Link>
              <Link to="/register?role=official" className="block">
                <Button variant="outline" className="w-full text-lg h-12 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">Apply for Access</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="p-8">About Page</div>} />
          <Route path="/contact" element={<div className="p-8">Contact Page</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report/new" element={<NewReport />} />
          <Route path="/reports" element={<MyReports />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/official/dashboard" element={<OfficialDashboard />} />
          <Route path="/official/reports" element={<AssignedReports />} />
          <Route path="/official/reports/:id" element={<ReviewUI />} />
          <Route path="/official/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
