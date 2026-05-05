"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, PlusCircle, Trash2, Edit, Eye } from "lucide-react";
import Link from "next/link";
import { getCurrentUserMachinery } from "@/api/machineryApis";
// ⚠️ deleteMachinery is not yet exported – uncomment when you add it
// import { deleteMachinery } from "@/api/machineryApis";
import Image from "next/image";
import { toast } from "sonner";

export default function ListingsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

const fetchData = async () => {
  setLoading(true);
  try {
    const res = await getCurrentUserMachinery();
    console.log('🔍 Raw response:', res); // Debug

    // Universal extraction: try all possible paths
    const machineryList =
      res?.data?.data?.machinery || // full axios + backend wrapper
      res?.data?.machinery ||       // unwrapped axios + backend wrapper
      res?.machinery ||             // direct machinery array
      [];

    setData(machineryList);
    console.log('✅ Extracted machinery:', machineryList);
  } catch (error) {
    console.error(error);
    toast.error("Failed to load your listings");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this machine? This action cannot be undone.")) return;

    setDeletingId(id);
    try {
      // 🔥 Uncomment when you add deleteMachinery to your API file
      // await deleteMachinery(id);
      // toast.success("Machinery deleted successfully");
      // fetchData(); // refresh list

      // 👇 Temporary mock – replace with real API call
      console.log("Deleting machinery with id:", id);
      toast.warning("Delete API not implemented yet. Please add deleteMachinery to your API.");
      // For demo, remove from local state:
      setData(prev => prev.filter(item => item._id !== id));
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to delete");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="w-full text-white flex justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellowClr"></div>
      </div>
    );
  }

  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold">Machine Listings</h1>
          <p className="text-zinc-400">Manage your fleet inventory</p>
        </div>
        <Button asChild>
          <Link href="/user/add-machinery">
            <PlusCircle size={20} className="mr-2" />
            List New Machine
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.length === 0 ? (
          <div className="col-span-full aspect-video bg-[#262626] rounded-2xl border-2 border-dashed border-neutral-800 flex items-center justify-center text-zinc-600">
            No listings yet. Click 'List New Machine' to start.
          </div>
        ) : (
          data.map((item) => (
            <div key={item._id} className="rounded-xl p-4 bg-neutral-800 text-white border border-neutral-700 hover:border-yellowClr/50 transition">
              <Link href={`/listings/${item.slug || item._id}`}>
                <Image
                  width={500}
                  height={500}
                  unoptimized
                  src={item.images?.[0] ? `${process.env.NEXT_PUBLIC_API_URL}${item.images[0]}` : "/images/jcb.jpeg"}
                  alt={item.title}
                  className="rounded-md aspect-video object-cover w-full"
                />
              </Link>

              <Link href={`/listings/${item.slug || item._id}`} className="inline-block mt-2">
                <p className="text-lg font-semibold line-clamp-1">{item.title}</p>
                <p className="text-xs text-neutral-400 line-clamp-2">{item.description}</p>

                <div className="flex justify-between items-end mt-2">
                  <p className="text-sm">
                    <span className="text-white text-lg font-bold">
                      ₹{item.dailyCapPrice || item.baseHourlyRate || "—"}
                    </span>
                    {item.dailyCapPrice ? "/day" : item.baseHourlyRate ? "/hour" : ""}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full ${item.availability ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}>
                    {item.availability ? "Available" : "Unavailable"}
                  </span>
                </div>
              </Link>

              {/* ACTION BUTTONS */}
              <div className="mt-3 flex gap-2">
                <Button asChild className="flex-1 bg-black text-white hover:bg-neutral-800">
                  <Link href={`/user/edit-machinery/${item._id}`} className="flex items-center justify-center gap-1">
                    <Edit size={14} /> Edit
                  </Link>
                </Button>

                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={() => handleDelete(item._id)}
                  disabled={deletingId === item._id}
                >
                  {deletingId === item._id ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Trash2 size={14} className="mr-1" /> Delete
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}