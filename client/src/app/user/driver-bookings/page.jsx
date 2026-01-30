import { UserCheck } from "lucide-react";

export default function DriversPage() {
  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Driver Management</h1>
        <button className="bg-[#fbb316] text-black px-4 py-2 rounded-lg font-bold text-sm">
          + Add New Driver
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-6 bg-[#262626] rounded-2xl border border-neutral-800 flex items-center gap-4">
          <div className="h-12 w-12 bg-neutral-800 rounded-full flex items-center justify-center">
            <UserCheck className="text-[#fbb316]" />
          </div>
          <div>
            <h4 className="font-bold">Amit Singh</h4>
            <p className="text-sm text-zinc-500">License: Heavy Vehicle (HV-992)</p>
          </div>
        </div>
      </div>
    </div>
  );
}