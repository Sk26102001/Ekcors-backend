import { Users, Box, TrendingUp, ShieldCheck, AlertCircle, HardHat } from "lucide-react";

export default function AdminDashboard() {
  const adminStats = [
    { label: "Platform Revenue", value: "₹12,45,000", icon: TrendingUp, color: "text-green-500" },
    { label: "Total Vendors", value: "48", icon: HardHat, color: "text-[#fbb316]" },
    { label: "Total Customers", value: "1,240", icon: Users, color: "text-blue-500" },
    { label: "Pending Approvals", value: "7", icon: ShieldCheck, color: "text-purple-500" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#171717] p-8 text-white font-sans">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">Admin Panel</h1>
        <p className="text-zinc-400 mt-2">Global system monitoring and fleet management</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {adminStats.map((stat) => (
          <div key={stat.label} className="bg-[#262626] p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
              </div>
              <div className={`p-2 rounded-lg bg-neutral-800/50`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Analytics Placeholder */}
        <div className="lg:col-span-2 bg-[#262626] rounded-2xl border border-neutral-800 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Growth Analytics</h2>
            <span className="text-xs font-medium px-2 py-1 bg-green-500/10 text-green-500 rounded-full">+14% vs last month</span>
          </div>
          <div className="h-80 flex items-center justify-center border border-dashed border-neutral-700 rounded-xl text-zinc-600 font-medium">
            System Traffic & Revenue Chart
          </div>
        </div>

        {/* Recent Activity/System Alerts */}
        <div className="bg-[#262626] rounded-2xl border border-neutral-800 p-6">
          <h2 className="text-xl font-bold mb-6">Critical Alerts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4 p-4 rounded-xl bg-neutral-800/30 border border-neutral-800">
                <AlertCircle className="h-5 w-5 text-[#fbb316] shrink-0" />
                <div>
                  <p className="text-sm font-medium">New Vendor Verification</p>
                  <p className="text-xs text-zinc-500 mt-1">"Deepak Cranes" uploaded documents for review.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}