import { PlusCircle } from "lucide-react";

export default function ListingsPage() {
  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Machine Listings</h1>
          <p className="text-zinc-400">Manage your fleet inventory</p>
        </div>
        <button className="flex items-center gap-2 bg-[#fbb316] text-black px-6 py-3 rounded-xl font-bold hover:brightness-110 transition">
          <PlusCircle size={20} />
          List New Machine
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Placeholder for Machine Cards */}
        <div className="aspect-video bg-[#262626] rounded-2xl border-2 border-dashed border-neutral-800 flex items-center justify-center text-zinc-600">
          No listings yet. Click "List New Machine" to start.
        </div>
      </div>
    </div>
  );
}