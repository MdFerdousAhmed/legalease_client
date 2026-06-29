"use client"
import { useSession } from '@/lib/auth-client';
import { Card, Button } from "@heroui/react";
import { FaCrown, FaCalendarAlt, FaUsers, FaDollarSign } from "react-icons/fa"
import UpgradePremiumButton from '@/components/UpgradePremiumButton';

const UserDashboardHomePage = () => {
  const stats = {
    totalUser: 15,
    totalLawyer: 450,
    totalRevenue: 25000,
  };

  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>
  }
  const user = session?.user;
  // console.log('Session data in UserDashboardHomePage', user);
  const plan = user?.plan
  // console.log(plan);

  return (
    <div className="space-y-6 mt-6">
      <h2 className='text-2xl'>welcome back, {user?.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass border-white/5" radius="lg">
          <div className="p-6 flex flex-row items-center justify-between">
            <div className="space-y-1">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total User</span>
              <h2 className="text-3xl font-extrabold text-gray-400">{stats?.totalUser}</h2>
            </div>
            <div className="p-3.5 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20"><FaCalendarAlt size={24} /></div>
          </div>
        </Card>
        <Card className="glass border-white/5" radius="lg">
          <div className="p-6 flex flex-row items-center justify-between">
            <div className="space-y-1">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total lawyer</span>
              <h2 className="text-3xl font-extrabold text-gray-400">{stats?.totalLawyer}</h2>
            </div>
            <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20"><FaUsers size={24} /></div>
          </div>
        </Card>
        <Card className="glass border-white/5" radius="lg">
          <div className="p-6 flex flex-row items-center justify-between">
            <div className="space-y-1">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Accumulated Revenue</span>
              <h2 className="text-3xl font-extrabold text-gray-400">{`$${stats?.totalRevenue.toFixed(2)}`}</h2>
            </div>
            <div className="p-3.5 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20"><FaDollarSign size={24} /></div>
          </div>
        </Card>
      </div>

      {plan ? (
        <Card className="border border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 via-amber-600/5 to-transparent relative overflow-hidden" radius="lg">
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-400 flex items-center gap-2"><FaCrown className="text-yellow-400" /> Unlock Unlimited Event Creation</h3>
              <p className="text-slate-400 text-xs max-w-xl leading-relaxed">Standard organizer accounts are limited to <strong>3 events</strong>. Upgrade to our Premium Package for <strong>$49.00</strong> to host unlimited events.</p>
            </div>
            <UpgradePremiumButton />
          </div>
        </Card>
      ) : (
        <Card className="border border-green-500/20 bg-gradient-to-r from-green-500/5 via-amber-600/5 to-transparent relative overflow-hidden" radius="lg">
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-400 flex items-center gap-2"><FaCrown className="text-green-400" /> Welcome to premium dashboard</h3>
              <p className="text-slate-400 text-xs max-w-xl leading-relaxed">You can create more then 3 events now...</p>
            </div>

          </div>
        </Card>
      )}
    </div>
  );
};

export default UserDashboardHomePage;