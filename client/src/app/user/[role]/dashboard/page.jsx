import { LayoutDashboard, Users, Box, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Total Revenue", value: "₹4,25,000", icon: TrendingUp, color: "text-green-500" },
    { label: "Active Listings", value: "12", icon: Box, color: "text-[#fbb316]" },
    { label: "Active Drivers", value: "8", icon: Users, color: "text-blue-500" },
  ];

  return (
    <div className="w-full text-white">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
        <p className="text-zinc-400">Overview of your machinery rental business</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#262626] p-6 rounded-2xl border border-neutral-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-zinc-500 text-sm font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#262626] h-64 rounded-2xl border border-neutral-800 flex items-center justify-center text-zinc-500">
        Chart/Analytics Placeholder
      </div>
    </div>
  );
}